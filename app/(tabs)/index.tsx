import { SafeAreaView } from 'react-native';
import GameScreen from '@/src/screens/GameScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GameScreen />
    </SafeAreaView>
  );
}
