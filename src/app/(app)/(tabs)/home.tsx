import { useGlobalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { FeedRecipe } from '../../../components/feed-recipe';
import { TabScreenAnimatedContainer } from '../../../components/tab-screen-animated-container';

const uri =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOTVE4krGwl-9yoi0_0p5sRFrFVaEV1c9ew&usqp=CAU';

export default function Home() {
  const params = useGlobalSearchParams();

  return (
    <TabScreenAnimatedContainer tabIndex={params?.tabIndex}>
      <SafeAreaView className="flex-1 bg-background-primary ">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 80,
          }}>
          <View className="p-4 flex-1 gap-y-4">
            <FeedRecipe
              imageUri={uri}
              author="Katie Armin"
              difficulty="Easy"
              calories={320}
              liked
              likes={1_300_000}
              readyInMinutes={30}
              title="Almond & Orange Blossom French Crepes"
            />
            <FeedRecipe
              imageUri={uri}
              author="Katie Armin"
              difficulty="Easy"
              calories={320}
              liked
              likes={1_300_000}
              readyInMinutes={30}
              title="Almond & Orange Blossom French Crepes"
            />
            <FeedRecipe
              imageUri={uri}
              author="Katie Armin"
              difficulty="Easy"
              calories={320}
              liked
              likes={1_300_000}
              readyInMinutes={30}
              title="Almond & Orange Blossom French Crepes"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TabScreenAnimatedContainer>
  );
}
