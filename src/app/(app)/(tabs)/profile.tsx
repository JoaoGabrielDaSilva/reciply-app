import { Ionicons } from '@expo/vector-icons';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import Animated, { Easing, FadeInRight } from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

import { TabScreenAnimatedContainer } from '../../../components/tab-screen-animated-container';

export default function Profile() {
  const params = useGlobalSearchParams();

  return (
    <TabScreenAnimatedContainer tabIndex={params?.tabIndex}>
      <View className="flex-1 bg-background-primary" />
    </TabScreenAnimatedContainer>
  );
}
