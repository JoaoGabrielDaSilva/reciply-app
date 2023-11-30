import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import colors from 'tailwindcss/colors';

import { useTheme } from '../../store/use-theme';
import { Theme, themes } from '../../themes';

const ALL_THEMES = Object.keys(themes);

export default function SelectTheme() {
  const { changeTheme, currentTheme } = useTheme();

  const handleChangeTheme = (theme: Theme) => {
    if (theme !== currentTheme) {
      changeTheme(theme);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <View className="mx-4">
        <FlatList
          className="mt-4"
          data={ALL_THEMES}
          keyExtractor={theme => theme}
          renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => handleChangeTheme(item)}>
              <View
                className={`flex-row items-center justify-between py-3 border-[1px] border-transparent ${
                  index !== ALL_THEMES.length - 1 ? 'border-b-gray-300' : ''
                }`}>
                <View className="flex-row items-center">
                  <Text className="ml-2 text-text-primary">{item}</Text>
                </View>
                {item === currentTheme ? (
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
