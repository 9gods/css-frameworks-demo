import type { HTMLAttributes } from "react";

export const CardFooter = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) => (
	<div {...props} className="flex w-full py-6 justify-end items-center">
		{children}
	</div>
);
