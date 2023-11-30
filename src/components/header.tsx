import { useTranslation } from 'react-i18next';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

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
    <View className="bg-primary px-4 py-2 pt-12" style={style} {...props}>
      <View className="gap-y-2">
        <Text className="font-semibold text-white text-md">
          {t('totalBalance', { ns: 'dashboard' })}
        </Text>
        <CurrencyText value={100} className="font-bold text-white text-xl self-start" />
      </View>
    </View>
  );
}
