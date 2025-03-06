import { Stack } from 'expo-router';
import { PlayerProvider } from '@/src/context/PlayerContext';

export default function RootLayoutNav() {
  return (
    <PlayerProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PlayerProvider>
  );
}
