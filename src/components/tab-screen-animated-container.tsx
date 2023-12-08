import { useIsFocused } from '@react-navigation/native';
import { ReactNode, useEffect } from 'react';
import Animated, {
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

  const isFocused = useIsFocused();

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

  useEffect(() => {
    if (isFocused) {
      opacity.value = withTiming(1);
      translateX.value = withSpring(0, { overshootClamping: true, stiffness: 500 });
    } else {
      opacity.value = 0.8;
      translateX.value = index > tabIndex ? -15 : 15;
    }
  }, [isFocused]);

  return <Animated.View style={style}>{children}</Animated.View>;
}
