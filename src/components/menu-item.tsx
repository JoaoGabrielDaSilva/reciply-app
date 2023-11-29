import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

const variants = {
  borderless: '',
  withBorder: '',
} as const;

type MenuItemProps = {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
  variant?: keyof typeof variants;
};

export function MenuItem({ label, icon, onPress, variant = 'borderless' }: MenuItemProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress} activeOpacity={0.7}>
      <View className="flex-row items-center">
        {icon}

        <View className="flex-1">
          <View className="flex-row items-center justify-between mr-2">
            <Text>{label}</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.gray[500]} />
          </View>
          {variant === 'withBorder' ? (
            <View className="w-full h-[1px] absolute -bottom-3 bg-gray-300" />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}
