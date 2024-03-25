import { View } from "@/components/Themed";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import { palette } from "@/constants/palette";
import { space } from "@/constants/space";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateAccountScreen = () => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.header}>
				<Heading
					weight="bold"
					size="7"
					accessibilityRole="header"
					aria-level="1"
					aria-setsize="1"
				>
					Create Account
				</Heading>
				<Text
					size="2"
					muted
					accessibilityRole="text"
					aria-level="2"
					aria-setsize="1"
				>
					Please register on your Streamline, where you can continue using our
					service.
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: palette.light["secondary-2"],
	},
	header: {
		padding: space[4],
		rowGap: space[4],
		flexDirection: "column",
	},
});
