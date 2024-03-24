import { palette } from "@/constants/palette";
import { radius } from "@/constants/radius";
import { space } from "@/constants/space";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	base: {
		userSelect: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		textAlign: "center",
		height: space[5],
		width: space[5],
	},
	"size-1": {
		borderRadius: radius["1"],
	},
	"size-2": {
		height: space[6],
		width: space[6],
		borderRadius: radius["2"],
	},
	"size-3": {
		height: space[7],
		width: space[7],
		borderRadius: radius["3"],
	},
	"size-4": {
		paddingVertical: 20,
		paddingHorizontal: 28,
	},
	"variant-solid": {
		backgroundColor: palette.light["primary-9"],
		color: palette.light["primary-contrast"],
	},
	"variant-soft": {
		backgroundColor: palette.light["primary-a3"],
		color: palette.light["primary-a11"],
	},
	"variant-surface": {
		backgroundColor: palette.light["primary-surface"],
		color: palette.light["primary-a11"],
		borderWidth: 1,
		borderColor: palette.light["primary-7"],
	},
	"variant-outline": {
		backgroundColor: "transparent",
		color: palette.light["primary-a11"],
		borderWidth: 1,
		borderColor: palette.light["primary-8"],
	},
	"variant-ghost": {
		padding: space[1] * 1.5,
		margin: -space[1] * 1.5,
		color: palette.light["primary-a11"],
	},
	"radius-none": {
		borderRadius: 0,
	},
	"radius-small": {
		borderRadius: radius["1"],
	},
	"radius-medium": {
		borderRadius: radius["2"],
	},
	"radius-large": {
		borderRadius: radius["3"],
	},
	"radius-full": {
		borderRadius: 9999,
	},
});
