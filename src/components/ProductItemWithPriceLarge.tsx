import React from 'react';
import { View, Text } from '@gluestack-ui/themed';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

import { colors, fontFamily } from '../../config';

interface IProductItemWithPriceLargeProps {
  image: any;
  label: string;
  price: string;
  onPress: () => void;
}

const ProductItemWithPriceLarge = ({
  image: ImageComponent,
  label,
  price,
  onPress,
}: IProductItemWithPriceLargeProps): JSX.Element => {
  const { width } = useWindowDimensions();

  return (
    <View
      pt={'$6'}
      px={'$1'}
      pb={'$3.5'}
      backgroundColor={colors['white.50']}
      borderRadius={'$2xl'}
      w={width / 2 - 24}
      alignItems="center"
    >
      <View alignSelf="center">
        <ImageComponent />
      </View>

      <Text
        fontFamily={fontFamily.regular}
        mb={'$1'}
        mt={'$4'}
        fontSize={'$lg'}
        color="$light800"
      >
        {label}
      </Text>

      <Text
        fontFamily={fontFamily.medium}
        fontSize={'$lg'}
        color={colors['pink.50']}
      >
        {price}
      </Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: colors['pink.50'],
          paddingHorizontal: 6,
          borderRadius: 4,
          marginTop: 6,
        }}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text fontFamily={fontFamily.medium} fontSize={'$sm'}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItemWithPriceLarge;
