import { StatusBar } from 'expo-status-bar';

import { GluestackUIStyledProvider, View, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIStyledProvider config={config}>
      <StatusBar style="auto" />

      <View
        flex={1}
        backgroundColor="$white"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontFamily="Jost_400Regular" fontSize={'$md'}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </GluestackUIStyledProvider>
  );
}
