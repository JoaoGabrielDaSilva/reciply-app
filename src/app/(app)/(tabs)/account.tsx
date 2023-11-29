import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import colors from 'tailwindcss/colors';

import { MenuItem } from '../../../components/menu-item';

export default function Account() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white pt-12">
      <ScrollView>
        <View className="p-4">
          <View className="bg-white shadow-lg shadow-gray-300 rounded-md">
            <MenuItem
              onPress={() => router.push('/select-language')}
              label="Idioma e Região"
              variant="borderless"
              icon={
                <View className="p-1 rounded-md bg-blue-500 m-2">
                  <Ionicons name="ios-globe-outline" size={18} color={colors.white} />
                </View>
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}