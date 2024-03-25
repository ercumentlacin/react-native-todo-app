import { fontFamily } from "@/constants/fontFamily";
import { fontSize } from "@/constants/fontSize";
import { fontWeight } from "@/constants/fontWeight";
import { letterSpacing } from "@/constants/letterSpacing";
import { lineHeight } from "@/constants/lineHeight";
import { palette } from "@/constants/palette";
import React, { type ComponentProps, type FC } from "react";
import { Text as OriginalText, StyleSheet } from "react-native";

interface Props extends ComponentProps<typeof OriginalText> {
	children: string;
	asChild?: boolean;
	size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
	weight?: "light" | "regular" | "medium" | "bold";
	align?: "left" | "center" | "right";
	truncate?: boolean;
	muted?: boolean;
}

const Text: FC<Props> = ({
	children,
	style,
	size = "3",
	muted = false,
	weight = "regular",
	align = "left",
	truncate = false,
	...props
}) => {
	return (
		<OriginalText
			style={[
				styles.base,
				styles[`size-${size}`],
				styles[`weight-${weight}`],
				styles[`align-${align}`],

				muted && styles.muted,
				truncate && styles.truncate,
				style,
			]}
			numberOfLines={truncate ? 1 : undefined}
			ellipsizeMode={truncate ? "tail" : undefined}
			{...props}
		>
			{children}
		</OriginalText>
	);
};

export default Text;

const styles = StyleSheet.create({
	base: {
		lineHeight: lineHeight[3],
		letterSpacing: letterSpacing[3],
		fontSize: fontSize[3],
		color: palette.light["secondary-12"],
		fontFamily: fontFamily.Inter_400Regular,
	},
	"size-1": {
		fontSize: fontSize[1],
		lineHeight: lineHeight[1],
		letterSpacing: letterSpacing[1],
	},
	"size-2": {
		fontSize: fontSize[2],
		lineHeight: lineHeight[2],
		letterSpacing: letterSpacing[2],
	},
	"size-3": {
		fontSize: fontSize[3],
		lineHeight: lineHeight[3],
		letterSpacing: letterSpacing[3],
	},
	"size-4": {
		fontSize: fontSize[4],
		lineHeight: lineHeight[4],
		letterSpacing: letterSpacing[4],
	},
	"size-5": {
		fontSize: fontSize[5],
		lineHeight: lineHeight[5],
		letterSpacing: letterSpacing[5],
	},
	"size-6": {
		fontSize: fontSize[6],
		lineHeight: lineHeight[6],
		letterSpacing: letterSpacing[6],
	},
	"size-7": {
		fontSize: fontSize[7],
		lineHeight: lineHeight[7],
		letterSpacing: letterSpacing[7],
	},
	"size-8": {
		fontSize: fontSize[8],
		lineHeight: lineHeight[8],
		letterSpacing: letterSpacing[8],
	},
	"size-9": {
		fontSize: fontSize[9],
		lineHeight: lineHeight[9],
		letterSpacing: letterSpacing[9],
	},
	muted: {
		color: palette.light["secondary-11"],
	},
	"weight-light": {
		fontFamily: fontFamily.Inter_300Light,
		fontWeight: fontWeight.light,
	},
	"weight-regular": {
		fontFamily: fontFamily.Inter_400Regular,
		fontWeight: fontWeight.regular,
	},
	"weight-medium": {
		fontFamily: fontFamily.Inter_500Medium,
		fontWeight: fontWeight.medium,
	},
	"weight-bold": {
		fontWeight: fontWeight.bold,
		fontFamily: fontFamily.Inter_700Bold,
	},
	"align-left": {
		textAlign: "left",
	},
	"align-center": {
		textAlign: "center",
	},
	"align-right": {
		textAlign: "right",
	},
	truncate: {
		overflow: "hidden",
	},
});
