import type { HTMLAttributes } from "react";

export const CardDescription = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLParagraphElement>>) => (
	<p {...props} className="text-sm text-zinc-500 leading-0.5">
		{children}
	</p>
);
