import { Redirect } from "expo-router";

// app/Index.tsx
import React from "react";
import { View } from "react-native";

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

const Index = () => {
	return <Redirect href={"/(account)/register"} />;
};

let EntryPoint = Index;

if (storybookEnabled) {
	const StorybookUI = require("../.storybook").default;
	EntryPoint = () => {
		return (
			<View style={{ flex: 1 }}>
				<StorybookUI />
			</View>
		);
	};
}

export default EntryPoint;
