import {
	type ComponentProps,
	type ReactElement,
	Suspense,
	cloneElement,
} from "react";
import { Pressable } from "react-native";
import Loading from "./loading";
import { styles } from "./styles";

interface VariantProps {
	color?: string;
}

interface Props extends ComponentProps<typeof Pressable> {
	children: ReactElement;

	size?: "1" | "2" | "3" | "4";
	variant?: "solid" | "soft" | "surface" | "outline" | "ghost";
	radius?: "none" | "small" | "medium" | "large" | "full";
	loading?: boolean;
}

const IconButton = ({
	children,
	size = "2",
	variant = "solid",
	loading = false,
	radius = "medium",
}: Props) => {
	const colorValue =
		(styles[`variant-${variant}`] as VariantProps)?.color ??
		children.props.color;

	return (
		<Pressable
			style={[
				styles.base,
				styles[`size-${size}`],
				styles[`variant-${variant}`],
				styles[`radius-${radius}`],
			]}
		>
			{loading && (
				<Suspense fallback="">
					<Loading colorValue={colorValue}>{children}</Loading>
				</Suspense>
			)}

			{!loading &&
				cloneElement(children, {
					color: colorValue,
				})}
		</Pressable>
	);
};

export default IconButton;
