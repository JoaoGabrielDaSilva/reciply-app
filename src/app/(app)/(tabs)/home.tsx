import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

import { CurrencyText } from '../../../components/currency-text';
import { Goal } from '../../../components/goal';
import { HomeHeader } from '../../../components/header';
import { useTour } from '../../../store/use-tour';

export default function Home() {
  const { startTour } = useTour();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  useEffect(() => {
    startTour('');
  }, []);

  return (
    <View className="flex-1 bg-background-primary">
      <HomeHeader value={100} scrollY={scrollY} />

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          padding: 16,
          gap: 12,
        }}>
        <View className="flex-row gap-x-2">
          <View className="bg-background-secondary p-4 rounded-md flex-1 shadow-md shadow-shadow-primary">
            <View className="flex-row gap-x-2">
              <Text className="font-semibold text-text-primary text-md">Total Income</Text>
              <Ionicons name="ios-trending-up" size={20} color={colors.green[500]} />
            </View>
            <CurrencyText
              value={100}
              className="font-bold text-text-secondary text-xl self-start"
            />
          </View>

          <View className="bg-background-secondary p-4 rounded-md flex-1 shadow-md shadow-shadow-primary">
            <View className="flex-row gap-x-2">
              <Text className="font-semibold text-text-primary text-md">Total Outcome</Text>
              <Ionicons name="ios-trending-down" size={20} color={colors.red[500]} />
            </View>
            <CurrencyText
              value={500}
              className="font-bold text-text-secondary text-xl self-start"
            />
          </View>
        </View>
        <View className="p-4 bg-background-secondary rounded-lg shadow-md shadow-shadow-primary">
          <Text className="text-lg text-text-primary font-bold">Goals</Text>
          <Goal
            title="New Car"
            dueDate={new Date(2022, 10, 24)}
            value={150}
            goalValue={1000}
            className="mt-4"
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
