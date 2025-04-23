import type { HTMLAttributes } from "react";

export const CardContent = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) => (
	<div {...props} className="flex flex-col w-full">
		{children}
	</div>
);
