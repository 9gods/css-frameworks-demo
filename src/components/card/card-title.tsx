import type { HTMLAttributes } from "react";

export const CardTitle = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLHeadingElement>>) => (
	<h1
		{...props}
		className=" text-lg font-medium leading-2 tracking-tight text-zinc-300"
	>
		{children}
	</h1>
);
