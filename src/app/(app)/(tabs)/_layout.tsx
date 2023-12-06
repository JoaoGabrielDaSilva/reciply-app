import { Ionicons } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import colors from 'tailwindcss/colors';

import { TabBarCenterButton } from '../../../components/tab-bar-center-button';

const barColor = '#FFFFFF';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green[600],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
        },

        tabBarItemStyle: {
          backgroundColor: colors.white,
          borderTopColor: '#ccc',
          borderTopWidth: 0.5,
        },
      }}
      tabBar={props => (
        <View className="absolute left-0 right-0 bottom-0">
          <BottomTabBar {...props} />
          <View
            style={{
              backgroundColor: barColor,
            }}
            className="h-9 absolute left-0 right-0 bottom-0"
          />
        </View>
      )}>
      <Tabs.Screen name="index" redirect options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: props => <Ionicons name="home-outline" {...props} />,
        }}
        initialParams={{
          tabIndex: 0,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: props => <Ionicons name="search-outline" {...props} />,
        }}
        initialParams={{
          tabIndex: 1,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarButton: props => <TabBarCenterButton bgColor={barColor} {...props} />,
        }}
        initialParams={{
          tabIndex: 2,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: props => <Ionicons name="heart-outline" {...props} />,
        }}
        initialParams={{
          tabIndex: 3,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: props => <Ionicons name="person-outline" {...props} />,
        }}
        initialParams={{
          tabIndex: 4,
        }}
      />
    </Tabs>
  );
}
