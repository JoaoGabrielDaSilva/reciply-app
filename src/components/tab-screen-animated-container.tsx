import { useFocusEffect } from 'expo-router';
import { ReactNode } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { useTabIndex } from '../store/use-tab-index';

type TabScreenAnimatedContainerProps = {
  children: ReactNode;
  tabIndex: number;
};

export function TabScreenAnimatedContainer({
  children,
  tabIndex,
}: TabScreenAnimatedContainerProps) {
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);

  const { index } = useTabIndex();

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateX: translateX.value,
      },
    ],
    flex: 1,
  }));

  useFocusEffect(() => {
    opacity.value = withTiming(1);
    translateX.value = withSpring(0, { overshootClamping: true, stiffness: 500 });

    return () => {
      opacity.value = 0.5;
      translateX.value = index > tabIndex ? -15 : 15;
    };
  });

  return <Animated.View style={style}>{children}</Animated.View>;
}
