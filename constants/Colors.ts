import { palette } from "./palette";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
	light: {
		text: palette.light["secondary-12"],
		background: palette.light["secondary-2"],
		tint: palette.light["primary-10"],
		tabIconDefault: "blue",
		tabIconSelected: palette.light["primary-10"],
	},
	dark: {
		text: "#fff",
		background: "#000",
		tint: tintColorDark,
		tabIconDefault: "#ccc",
		tabIconSelected: tintColorDark,
	},
};
