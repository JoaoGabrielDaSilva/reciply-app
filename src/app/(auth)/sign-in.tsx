import { Pressable, Text, View } from 'react-native';

import { useAuth } from '../../store/use-auth';

export default function SignIn() {
  const { set } = useAuth();

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable onPress={() => set({ isAuthenticated: true })}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}
