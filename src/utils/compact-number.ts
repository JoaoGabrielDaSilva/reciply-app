import { Platform } from 'react-native';

export function compactNumber(number: number) {
  if (Platform.OS === 'android')
    return Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 2 }).format(
      number
    );

  switch (true) {
    case number >= 1_000 && number < 1_000_000:
      return `${(number / 1000).toPrecision(2)}K`;
    case number >= 1_000_000:
      return `${(number / 1000000).toPrecision(2)}M`;
    default:
      return String(number);
  }
}
