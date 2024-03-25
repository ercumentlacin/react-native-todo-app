import React, { type ComponentProps } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface Props extends ComponentProps<typeof Text> {
	asChild?: boolean;
	size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
	weight?: "light" | "regular" | "medium" | "bold";
	align?: "left" | "center" | "right";
	truncate?: boolean;
}

const Heading = ({
	children,
	size = "6",
	weight = "regular",
	align = "left",
	truncate = false,
	style,
	...props
}: Props) => {
	return (
		<Text
			style={[
				styles.base,
				styles[`size-${size}`],
				styles[`weight-${weight}`],
				styles[`align-${align}`],
				truncate && styles.truncate,
				style,
			]}
			numberOfLines={truncate ? 1 : undefined}
			ellipsizeMode={truncate ? "tail" : undefined}
			{...props}
		>
			{children}
		</Text>
	);
};

export default Heading;
