import { Feather } from '@expo/vector-icons';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Line, Path, Svg } from 'react-native-svg';
import colors from 'tailwindcss/colors';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

const HOLE_SIZE = 75;

export const TabBarCenterButton: React.FC<Props> = ({ bgColor, ...props }) => (
  <View className="relative w-[75px] items-center" pointerEvents="box-none">
    <Svg
      width={HOLE_SIZE}
      height={HOLE_SIZE}
      viewBox={`0 0 ${HOLE_SIZE} ${HOLE_SIZE}`}
      className="absolute top-0">
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={bgColor}
        strokeWidth="0.5"
        stroke="#ccc"
      />
      <Line x1="0" y1="0" x2="0" y2="75" strokeWidth="1" stroke={bgColor} />
      <Line x1="75" y1="75" x2="75" y2="0" strokeWidth="1" stroke={bgColor} />
    </Svg>
    <Pressable
      className="-top-6 items-center justify-center bg-green-500 rounded-full w-14 h-14"
      onPress={props.onPress}>
      <Feather name="plus" color={colors.white} size={30} />
    </Pressable>
  </View>
);
