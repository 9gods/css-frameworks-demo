import type { HTMLAttributes } from "react";

export const CardHeader = ({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) => (
	<div {...props} className="py-6 space-y-4">
		{children}
	</div>
);
