import { Ionicons } from '@expo/vector-icons';
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
} from 'date-fns';
import { useMemo } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { NumericFormat } from 'react-number-format';
import colors from 'tailwindcss/colors';

import { CurrencyText } from './currency-text';

type GoalProps = {
  title: string;
  dueDate: Date;
  value: number;
  goalValue: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
};

const handleDaysPlural = (timeLeft: number, type: 'day' | 'month' | 'year') => {
  if (timeLeft === 1) return `${timeLeft} ${type} left`;

  return `${timeLeft} ${type}s left`;
};

const getTimeLeft = (dueDate: Date) => {
  const now = new Date();
  const monthsLeft = differenceInCalendarMonths(dueDate, now);

  switch (true) {
    case monthsLeft <= 0:
      return 'This goal was not achieved in time';
    case monthsLeft === 1:
      const daysLeft = differenceInCalendarDays(dueDate, now);
      return handleDaysPlural(daysLeft, 'day');
    case monthsLeft < 12:
      return handleDaysPlural(monthsLeft, 'month');
    case monthsLeft >= 12:
      const yearsLeft = differenceInCalendarYears(dueDate, now);
      return handleDaysPlural(yearsLeft, 'year');
    default:
      return 'Invalid Date';
  }
};

export function Goal({ title, dueDate = new Date(), value, goalValue, style }: GoalProps) {
  const isCompleted = value === goalValue;

  const decimalPercentage = value / goalValue;
  const percentage = decimalPercentage * 100;

  const barWidth = useSharedValue(0);

  const timeLeft = useMemo(() => getTimeLeft(dueDate), [dueDate]);

  const rProgressStyle = useAnimatedStyle(() => ({
    width: withSpring(barWidth.value * decimalPercentage, { overshootClamping: true }),
  }));

  return (
    <View className="bg-white" style={style}>
      <View className="flex-row justify-between">
        <View className="flex-row gap-x-4">
          <View className="bg-gray-400 p-4 rounded-full">
            <Ionicons name="car" size={22} color={colors.white} />
          </View>
          <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-400">
              {isCompleted ? 'This goal was achieved' : timeLeft}
            </Text>
          </View>
        </View>
        <Text className="font-extrabold text-md">{percentage}%</Text>
      </View>
      <View className="my-4">
        <View
          className="h-2 w-full rounded-full bg-gray-200"
          onLayout={({ nativeEvent: { layout } }) => {
            if (barWidth.value === 0) {
              barWidth.value = layout.width;
            }
          }}>
          <Animated.View className="flex-1 rounded-full bg-green-500" style={rProgressStyle} />
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <CurrencyText value={value} className="font-medium" />
        <CurrencyText value={goalValue} className="font-medium" />
      </View>
    </View>
  );
}
