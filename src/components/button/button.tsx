import type { ButtonHTMLAttributes } from "react";

type ButtonStyles = "default" | "secondary" | "ghost" | "icon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonStyles;
}

export const Button = ({ children, variant, ...props }: Readonly<Props>) => {
	const buttonStyles: Record<ButtonStyles, string> = {
		default: "px-4 py-1 hover:bg-purple-500 active:bg-purple-600 bg-purple-600",
		secondary:
			"px-4 py-1 hover:bg-zinc-100/30 active:bg-zinc-200/30 bg-zinc-100/40",
		ghost: "px-4 py-1 hover:bg-zinc-100/30 active:bg-zinc-200/30",
		icon: "p-2 hover:bg-zinc-100/30 active:bg-zinc-200/30",
	};

	return (
		<button
			{...props}
			className={`flex gap-3 items-center text-sm hover:cursor-pointer  text-zinc-100 rounded-md font-medium  transition-colors duration-200 ease-in-out ${buttonStyles[variant]}`}
		>
			{children}
		</button>
	);
};
