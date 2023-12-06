import { useGlobalSearchParams } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { TabScreenAnimatedContainer } from '../../../components/tab-screen-animated-container';

const { width } = Dimensions.get('window');

export default function Home() {
  const params = useGlobalSearchParams();
  const scrollY = useSharedValue(0);

  return (
    <TabScreenAnimatedContainer tabIndex={params?.tabIndex}>
      <View className="flex-1 bg-background-primary" />
    </TabScreenAnimatedContainer>
  );
}
