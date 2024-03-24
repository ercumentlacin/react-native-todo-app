import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
	return (
		<View>
			<Text>Hello, World!</Text>
			<View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="app/(tabs)/index.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({});
