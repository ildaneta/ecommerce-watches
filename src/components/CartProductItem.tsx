import React from 'react';
import { View, Text } from '@gluestack-ui/themed';

import TrashSVG from '../assets/trash.svg';
import { TouchableOpacity } from 'react-native';
import { colors, fontFamily } from '../../config';

interface ICartProductItemProps {
  image: any;
  name: string;
  price: string;
  onPressDelete: () => void;
}

const CartProductItem = ({
  image: ImageComponent,
  name,
  price,
  onPressDelete,
}: ICartProductItemProps): JSX.Element => {
  return (
    <View flexDirection="row">
      <View
        backgroundColor={colors['white.50']}
        px={'$6'}
        borderRadius={'$2xl'}
        mr={'$4'}
      >
        <ImageComponent />
      </View>

      <View>
        <Text
          fontFamily={fontFamily.medium}
          color="$textLight900"
          fontSize={'$lg'}
          mt={'$3'}
        >
          {name}
        </Text>

        <Text
          fontFamily={fontFamily.medium}
          color={colors['pink.50']}
          fontSize={'$md'}
        >
          {price}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: 'absolute', bottom: 10, right: -100 }}
          onPress={onPressDelete}
        >
          <TrashSVG />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProductItem;
