import { StatusBar } from 'expo-status-bar';

import { GluestackUIStyledProvider, View, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { Routes } from './src/routes';

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
      <StatusBar style="dark" />

      <Routes />
    </GluestackUIStyledProvider>
  );
}
