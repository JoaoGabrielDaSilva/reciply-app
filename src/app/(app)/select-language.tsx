import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import i18next from 'i18next';
import { useCallback, useMemo, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

import { normalizeString } from '../../utils/normalize-string';

const ALL_LANGUAGES = [
  {
    name: 'Português (Brasil)',
    locale: 'pt-BR',
    code: 'br',
  },
  {
    name: 'Inglês (USA)',
    locale: 'en-US',
    code: 'us',
  },
] as const;

type Locale = (typeof ALL_LANGUAGES)[number]['locale'];

export default function SelectLanguage() {
  const router = useRouter();
  const { t } = useTranslation('select-language');

  const [search, setSearch] = useState('');
  const [locale, setLocale] = useState(i18next.language);

  const changeLocale = useCallback(async (locale: Locale) => {
    setLocale(locale);
    await i18next.changeLanguage(locale);
  }, []);

  const languages = useMemo(
    () =>
      ALL_LANGUAGES.filter(language => {
        const normalizedName = normalizeString(language.name).toLowerCase();
        const normalizedSearch = normalizeString(search).toLowerCase();

        return normalizedName.includes(normalizedSearch);
      }),
    [search]
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-4">
        <View className="flex-row items-center">
          <View className="flex-1 flex-row items-center px-4 py-2 bg-gray-200 rounded-md">
            <Ionicons name="search" color={colors.gray[500]} size={18} />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder={t('placeholder')}
              className="flex-1 ml-2 text-gray-700"
              cursorColor={colors.green[600]}
              selectionColor={colors.green[600]}
              placeholderTextColor={colors.gray[500]}
            />
          </View>
          <TouchableOpacity className="ml-4" activeOpacity={0.7} onPress={() => router.back()}>
            <Text className="text-blue-600 font-medium">{t('cancel')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          className="mt-4"
          data={languages}
          keyExtractor={item => item.locale}
          renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => changeLocale(item.locale)}>
              <View
                className={`flex-row items-center justify-between py-3 border-[1px] border-transparent ${
                  index !== languages.length - 1 ? 'border-b-gray-300' : ''
                }`}>
                <View className="flex-row items-center">
                  <CountryFlag isoCode={item.code} size={20} style={{ borderRadius: 4 }} />
                  <Text className="ml-2">{item.name}</Text>
                </View>
                {item.locale === locale ? (
                  <Ionicons name="ios-checkmark-sharp" size={20} color={colors.blue[600]} />
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
