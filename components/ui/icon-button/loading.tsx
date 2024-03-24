import { AntDesign } from "@expo/vector-icons";
import { type ReactElement, useEffect } from "react";
import Animated, {
	cancelAnimation,
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

interface Props {
	colorValue: string;
	children: ReactElement;
}

const Loading = ({ children, colorValue }: Props) => {
	const rotation = useSharedValue(0);

	const animatedStyles = useAnimatedStyle(
		() => ({
			transform: [
				{
					rotateZ: `${rotation.value}deg`,
				},
			],
		}),
		[rotation.value],
	);

	useEffect(() => {
		rotation.value = withRepeat(
			withTiming(360, {
				duration: 1000,
				easing: Easing.linear,
			}),
			200,
		);
		return () => cancelAnimation(rotation);
	}, [rotation]);

	return (
		<Animated.View style={animatedStyles}>
			<AntDesign
				{...{ ...children.props, color: colorValue }}
				name="loading1"
				testID="icon-button-loading"
			/>
		</Animated.View>
	);
};

export default Loading;
