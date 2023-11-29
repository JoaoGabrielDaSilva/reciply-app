import { StyleProp, TextInput, ViewStyle } from 'react-native';
import Animated, { useAnimatedProps, useDerivedValue, withTiming } from 'react-native-reanimated';

type AnimatedNumberDisplayProps = {
  style?: StyleProp<ViewStyle>;
  className?: string;
  value: number;
};

const AnimatedNumber = Animated.createAnimatedComponent(TextInput);

export function AnimatedNumberDisplay({ style, value }: AnimatedNumberDisplayProps) {
  const animatedValue = useDerivedValue(() => withTiming(value, { duration: 1000 }));

  const animatedProps = useAnimatedProps(() => {
    if (!animatedValue.value)
      return {
        text: `${value}`,
      };

    return {
      text: `${Math.round(animatedValue.value)}%`,
    };
  });

  return (
    <AnimatedNumber
      className="font-extrabold text-md self-start"
      style={style}
      animatedProps={animatedProps}
      editable={false}
    />
  );
}
