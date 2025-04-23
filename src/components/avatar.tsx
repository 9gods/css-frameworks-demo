import Image, { type ImageLoader, type StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface Props {
	src: string | StaticImageData;
	alt: string;
	width?: number | `${number}`;
	height?: number | `${number}`;
	quality?: number | `${number}`;
	priority?: boolean;
	loading?: "eager" | "lazy";
	onLoadingComplete?: (img: HTMLImageElement) => void;
	className?: string;
	children?: ReactNode;
}

export const Avatar = ({ alt, children, ...props }: Readonly<Props>) => {
	if (!alt) {
		throw new Error("Please provide an alt text for the image.");
	}
	const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

	const toBase64 = (str: string) =>
		typeof window === "undefined"
			? Buffer.from(str).toString("base64")
			: window.btoa(str);
	return (
		<Image
			alt={alt}
			{...props}
			width={48}
			height={48}
			placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
			className="object-cover rounded-full shadow border"
		/>
	);
};
