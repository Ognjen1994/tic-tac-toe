import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { COLORS } from '@/src/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.text,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          paddingBottom: insets.bottom > 0 ? insets.bottom - 8 : 8,
          height: 60 + insets.bottom,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Game',
          tabBarIcon: ({ color }) => <FontAwesome name="gamepad" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
