import type { HTMLAttributes } from "react";

export const CardContainer = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) => (
	<div
		{...props}
		className="bg-zinc-900 border-zinc-800 px-6 rounded-lg border shadow"
	>
		{children}
	</div>
);
