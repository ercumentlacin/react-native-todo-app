import { fontFamily } from "@/constants/fontFamily";
import { fontSize } from "@/constants/fontSize";
import { fontWeight } from "@/constants/fontWeight";
import { letterSpacing } from "@/constants/letterSpacing";
import { lineHeight } from "@/constants/lineHeight";
import { palette } from "@/constants/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	base: {
		fontSize: fontSize[6],
		letterSpacing: letterSpacing[6],
		fontWeight: fontWeight.bold,
		lineHeight: lineHeight[6],
		color: palette.light["secondary-12"],
		fontFamily: fontFamily.Inter_700Bold,
	},
	"size-1": {
		fontSize: fontSize[1],
		letterSpacing: letterSpacing[1],
		lineHeight: lineHeight[1],
	},
	"size-2": {
		fontSize: fontSize[2],
		letterSpacing: letterSpacing[2],
		lineHeight: lineHeight[2],
	},
	"size-3": {
		fontSize: fontSize[3],
		letterSpacing: letterSpacing[3],
		lineHeight: lineHeight[3],
	},
	"size-4": {
		fontSize: fontSize[4],
		letterSpacing: letterSpacing[4],
		lineHeight: lineHeight[4],
	},
	"size-5": {
		fontSize: fontSize[5],
		letterSpacing: letterSpacing[5],
		lineHeight: lineHeight[5],
	},
	"size-6": {
		fontSize: fontSize[6],
		letterSpacing: letterSpacing[6],
		lineHeight: lineHeight[6],
	},
	"size-7": {
		fontSize: fontSize[7],
		letterSpacing: letterSpacing[7],
		lineHeight: lineHeight[7],
	},
	"size-8": {
		fontSize: fontSize[8],
		letterSpacing: letterSpacing[8],
		lineHeight: lineHeight[8],
	},
	"size-9": {
		fontSize: fontSize[9],
		letterSpacing: letterSpacing[9],
		lineHeight: lineHeight[9],
	},
	"weight-light": {
		fontWeight: fontWeight.light,
		fontFamily: fontFamily.Inter_300Light,
	},
	"weight-regular": {
		fontWeight: fontWeight.regular,
		fontFamily: fontFamily.Inter_400Regular,
	},
	"weight-medium": {
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.Inter_500Medium,
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
