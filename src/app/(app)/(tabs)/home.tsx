import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

import { CurrencyText } from '../../../components/currency-text';
import { Goal } from '../../../components/goal';
import { HomeHeader } from '../../../components/header';

export default function Home() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  return (
    <View className="flex-1 bg-white">
      <HomeHeader value={100} scrollY={scrollY} />

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          padding: 16,
          gap: 12,
        }}>
        <View className="flex-row gap-x-2">
          <View className="bg-white p-4 rounded-md flex-1 shadow-md shadow-gray-300">
            <View className="flex-row gap-x-2">
              <Text className="font-semibold text-black text-md">Total Income</Text>
              <Ionicons name="ios-trending-up" size={20} color={colors.green[500]} />
            </View>
            <CurrencyText value={100} className="font-bold text-gray-700 text-xl self-start" />
          </View>
          <View className="bg-white p-4 rounded-md flex-1 shadow-md shadow-gray-300">
            <View className="flex-row gap-x-2">
              <Text className="font-semibold text-black text-md">Total Outcome</Text>
              <Ionicons name="ios-trending-down" size={20} color={colors.red[500]} />
            </View>
            <CurrencyText value={500} className="font-bold text-gray-700 text-xl self-start" />
          </View>
        </View>
        <View className="p-4 bg-white rounded-lg shadow-md shadow-gray-300">
          <Text className="text-lg font-bold">Goals</Text>
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
