import React from 'react';
import { View, Text, Divider } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

import Container from '../components/Container';
import CartProductItem from '../components/CartProductItem';

import { colors, fontFamily } from '../../config';

import ArrowLeftSVG from '../assets/arrow-left.svg';
import Item from '../assets/petite-rosewater.svg';

const Cart = (): JSX.Element => {
  const HeaderNavigation = () => (
    <View
      flexDirection="row"
      alignItems="center"
      w={'$full'}
      justifyContent="space-between"
    >
      <TouchableOpacity>
        <ArrowLeftSVG />
      </TouchableOpacity>

      <View>
        <Text
          fontFamily={fontFamily.medium}
          fontSize={'$2xl'}
          lineHeight={'$2xl'}
          color="$light700"
        >
          My Cart
        </Text>
      </View>

      <View />
    </View>
  );

  const ItemsCounterAndPrice = () => (
    <View flexDirection="row" justifyContent="space-between">
      <Text fontFamily={fontFamily.regular} fontSize={'$xl'} color="$light700">
        3 Items
      </Text>

      <Text fontFamily={fontFamily.semiBold} fontSize={'$xl'} color="$light700">
        $ 627.00
      </Text>
    </View>
  );

  return (
    <Container>
      <HeaderNavigation />

      <View mb={50} />

      <CartProductItem
        name="Petite Cherry"
        price="$ 209.00"
        image={Item}
        onPressDelete={() => {}}
      />

      <View mb={40} />

      <Divider backgroundColor={colors['white.50']} />

      <View mb={30} />

      <ItemsCounterAndPrice />
    </Container>
  );
};

export default Cart;
