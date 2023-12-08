import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';
import colors from 'tailwindcss/colors';

const GRADIENT_COLORS = ['#f4c001', '#b3e660', '#00B96D'];

type ProfileAvatarProps = {
  imageUri: string;
};

export function ProfileAvatar({ imageUri }: ProfileAvatarProps) {
  return (
    <View className="w-40 h-40 rounded-full">
      <LinearGradient
        style={{ flex: 1, padding: 4, borderRadius: 80 }}
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}>
        <Image source={{ uri: imageUri }} className="flex-1 rounded-full border-4 border-white" />
      </LinearGradient>
      <View className="w-10 h-10 absolute border-4 border-white rounded-full self-end bottom-4 overflow-hidden">
        <LinearGradient
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          colors={GRADIENT_COLORS}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          <Feather name="plus" color={colors.white} size={22} />
        </LinearGradient>
      </View>
    </View>
  );
}
