import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleProp, Text, View, ViewStyle , TextInput } from 'react-native';
import Animated, { SharedValue } from 'react-native-reanimated';
import { NumericFormat } from 'react-number-format';
import colors from 'tailwindcss/colors';

import { CurrencyText } from './currency-text';


type HomeHeaderProps = {
  value: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
  scrollY: SharedValue<number>;
};

export function HomeHeader({ value, style, ...props }: HomeHeaderProps) {
  const { t } = useTranslation();

  return (
    <View className="bg-green-600 px-4 py-2 pt-12" style={style} {...props}>
      <View className="gap-y-2">
        <Text className="font-semibold text-white text-md">
          {t('totalBalance', { ns: 'dashboard' })}
        </Text>
        <CurrencyText value={100} className="font-bold text-white text-xl self-start" />
      </View>
    </View>
  );
}
