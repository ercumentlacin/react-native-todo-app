import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta = {
	component: Text,
	argTypes: {
		weight: {
			control: { type: "select" },
			options: ["light", "regular", "medium", "bold"],
			defaultValue: "regular",
		},
		size: {
			control: { type: "select" },
			options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
			defaultValue: "3",
		},
		muted: {
			control: { type: "boolean" },
			defaultValue: false,
		},
		align: {
			control: { type: "select" },
			options: ["left", "center", "right"],
		},
		truncate: {
			control: { type: "boolean" },
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: "Hello, world!",
		size: "3",
		weight: "regular",
		muted: false,
		align: "left",
		truncate: false,
	},
};
