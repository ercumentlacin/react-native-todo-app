import { palette } from "@/constants/palette";
import { AntDesign } from "@expo/vector-icons";
import { fireEvent, render, screen } from "@testing-library/react-native";
import type { Text } from "react-native";
import IconButton from "../icon-button";

describe("icon-button", () => {
	it("should be visible", () => {
		const mockFn = jest.fn();

		render(
			<IconButton onPress={mockFn}>
				<AntDesign name="check" size={18} color="black" />
			</IconButton>,
		);

		const pressable = screen.getByTestId("icon-button");

		expect(pressable).toBeTruthy();

		fireEvent.press(pressable);

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	it("should display loading icon when props.loading", () => {
		render(
			<IconButton loading>
				<AntDesign name="check" size={18} color="black" />
			</IconButton>,
		);

		const loading = screen.getByTestId("icon-button-loading");
		expect(loading).toBeTruthy();
	});

	it("should be override svg color", () => {
		render(
			<IconButton>
				<AntDesign name="check" size={18} color="black" testID="icon" />
			</IconButton>,
		);
		const overriddenColor = palette.light["primary-contrast"];
		const icon = screen.getByTestId("icon") as Text;
		expect(icon).toHaveStyle({ color: overriddenColor });
	});
});
