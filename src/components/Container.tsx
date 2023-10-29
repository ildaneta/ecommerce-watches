import React from 'react';
import { ScrollView, View } from '@gluestack-ui/themed';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

interface IContainerProps {
  children: React.ReactNode;
  needsScroll?: boolean;
}

const Container = ({
  children,
  needsScroll = false,
}: IContainerProps): JSX.Element => {
  const IS_ANDROID = Platform.OS === 'android';
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: IS_ANDROID ? STATUS_BAR_HEIGHT : 0,
          backgroundColor: '#fff',
        }}
      />

      <View flex={1} pt={'$6'} px={'$4'} backgroundColor="$white">
        {needsScroll ? <ScrollView>{children}</ScrollView> : <>{children}</>}
      </View>
    </>
  );
};

export default Container;
