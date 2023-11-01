import React from 'react';
import { View, Text, Divider } from '@gluestack-ui/themed';
import { FlatList, TouchableOpacity } from 'react-native';

import { colors, fontFamily } from '../../config';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../routes/stack';

import Container from '../components/Container';
import CartProductItem from '../components/CartProductItem';

import ArrowLeftSVG from '../assets/arrow-left.svg';

import { useProductCartStore } from '../stores/productCart';

const HeaderNavigation = ({ onPress }: { onPress: () => void }) => (
  <View
    flexDirection="row"
    alignItems="center"
    w={'$full'}
    justifyContent="space-between"
  >
    <TouchableOpacity onPress={onPress}>
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

const Cart = (): JSX.Element => {
  const { cart, removeFromCart } = useProductCartStore();
  const { goBack } =
    useNavigation<NativeStackNavigationProp<StackRoutes, 'cart'>>();

  const sumProductsPrice = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const ItemsCounterAndPrice = () => (
    <View flexDirection="row" justifyContent="space-between">
      <Text fontFamily={fontFamily.regular} fontSize={'$xl'} color="$light700">
        {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
      </Text>

      <Text fontFamily={fontFamily.semiBold} fontSize={'$xl'} color="$light700">
        $ {sumProductsPrice}
      </Text>
    </View>
  );

  return (
    <Container>
      <HeaderNavigation onPress={() => goBack()} />

      <View mb={50} />

      {cart.length >= 1 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(productItem) => productItem.id}
            renderItem={({ item: product }) => (
              <CartProductItem
                name={product.name}
                price={product.price}
                image={product.image}
                onPressDelete={() => removeFromCart(product.id)}
              />
            )}
            ItemSeparatorComponent={() => <View mt={10} />}
          />

          <Divider backgroundColor={colors['white.50']} />

          <View mb={30} />

          <ItemsCounterAndPrice />

          <View mb={40} />
        </>
      ) : (
        <View alignItems="center">
          <Text>Your cart is empty</Text>
        </View>
      )}
    </Container>
  );
};

export default Cart;
