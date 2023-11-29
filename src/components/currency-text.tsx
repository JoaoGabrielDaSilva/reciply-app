import { useTranslation } from 'react-i18next';
import { Text, TextProps } from 'react-native';

type CurrencyTextProps = TextProps & {
  value: number;
};

export function CurrencyText({ value, ...props }: CurrencyTextProps) {
  const { t } = useTranslation();
  return <Text {...props}>{t('currency', { ns: 'intl', value })}</Text>;
}
