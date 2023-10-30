import React from 'react';
import { View, Text, Divider } from '@gluestack-ui/themed';
import { FlatList, TouchableOpacity } from 'react-native';

import Container from '../components/Container';
import CartProductItem from '../components/CartProductItem';

import { colors, fontFamily } from '../../config';

import ArrowLeftSVG from '../assets/arrow-left.svg';
import Item from '../assets/petite-rosewater.svg';
import { useProductCartStore } from '../stores/productCart';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../routes/stack';

const Cart = (): JSX.Element => {
  const { cart, removeFromCart } = useProductCartStore();
  const { goBack } =
    useNavigation<NativeStackNavigationProp<StackRoutes, 'cart'>>();

  const sumProductsPrice = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const HeaderNavigation = () => (
    <View
      flexDirection="row"
      alignItems="center"
      w={'$full'}
      justifyContent="space-between"
    >
      <TouchableOpacity onPress={() => goBack()}>
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
        {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
      </Text>

      <Text fontFamily={fontFamily.semiBold} fontSize={'$xl'} color="$light700">
        $ {sumProductsPrice}
      </Text>
    </View>
  );

  return (
    <Container>
      <HeaderNavigation />

      <View mb={50} />

      {cart.length >= 1 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(cartItem) => cartItem.id}
            renderItem={({ item: cartItem }) => (
              <CartProductItem
                name={cartItem.name}
                price={`$ ${cartItem.price}`}
                image={cartItem.image}
                onPressDelete={() => removeFromCart(cartItem.id)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 30 }}
            ItemSeparatorComponent={() => <View mt={10} />}
          />

          <Divider backgroundColor={colors['white.50']} />

          <View mb={40} />

          <ItemsCounterAndPrice />

          <View mb={30} />
        </>
      ) : (
        <View flex={1} alignItems="center">
          <Text>Your cart is empty</Text>
        </View>
      )}
    </Container>
  );
};

export default Cart;
