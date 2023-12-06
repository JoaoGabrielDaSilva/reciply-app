import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

import { compactNumber } from '../utils/compact-number';

type FeedRecipeProps = {
  author: string;
  liked: boolean;
  likes: number;
  title: string;
  readyInMinutes: number;
  difficulty: string;
  calories: number;
  imageUri: string;
};

export function FeedRecipe({
  title,
  imageUri,
  author,
  calories,
  difficulty,
  liked,
  likes,
  readyInMinutes,
}: FeedRecipeProps) {
  return (
    <View className="rounded-3xl shadow-md bg-white">
      <View className="rounded-3xl overflow-hidden">
        <ImageBackground source={{ uri: imageUri }} className="w-full h-80 justify-between">
          <View className="flex-row items-center justify-between">
            <View className="m-4 bg-white py-1 pl-1 pr-2 self-start rounded-full shadow-sm items-center flex-row opacity-85">
              <Image
                className="w-8 h-8 rounded-full mr-2"
                source={{
                  uri: 'https://i.pinimg.com/originals/e2/99/3f/e2993fd21189b3bdae04bd910ccac355.jpg',
                }}
              />
              <Text className="font-medium text-text-primary text-sm">{author}</Text>
            </View>
            <View className="items-center m-4">
              <Ionicons name="heart" color={liked ? colors.red[500] : colors.black} size={34} />
              <View className="bg-white px-2 rounded-full">
                <Text className="text-sm">{compactNumber(likes)}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text className="font-bold text-3xl text-white ml-4 mb-2">{title}</Text>
            <View className="w-full bg-white p-4 rounded-3xl flex-row items-center justify-center">
              <View className="flex-row items-center justify-around">
                <MaterialCommunityIcons
                  name="clock-time-eight"
                  size={16}
                  color={colors.gray[600]}
                  className="mr-2"
                />
                <Text>{readyInMinutes} min</Text>
              </View>
              <View className="w-[1px] rouned-full h-full bg-gray-500 mx-4" />
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="pot-steam"
                  size={18}
                  color={colors.gray[600]}
                  className="mr-2"
                />
                <Text>{difficulty}</Text>
              </View>
              <View className="w-[1px] rouned-full h-full bg-gray-500 mx-4" />
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="fire"
                  size={18}
                  color={colors.gray[600]}
                  className="mr-2"
                />
                <Text>{calories} Cal</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
