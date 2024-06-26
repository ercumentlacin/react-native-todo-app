import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { MyButton, type MyButtonProps } from "./Button";

const meta: Meta<MyButtonProps> = {
	title: "Button",
	component: MyButton,
	argTypes: {
		onPress: {
			action: "onPress event",
		},
	},

	decorators: [
		(Story) => (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Story />
			</View>
		),
	],
};

export default meta;

type Story = StoryObj<MyButtonProps>;

export const Basic: Story = {
	storyName: "Basic",
	args: {
		disabled: false,
		text: "Tap me",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		text: "Disabled",
	},
};
