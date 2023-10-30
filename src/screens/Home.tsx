import React from 'react';
import { View, Text } from '@gluestack-ui/themed';
import { FlatList, TouchableOpacity } from 'react-native';

import Container from '../components/Container';
import ProductItemWithPriceLarge from '../components/ProductItemWithPriceLarge';

import { colors, fontFamily } from '../../config';

import MenuSVG from '../assets/menu.svg';
import BagSVG from '../assets/bag.svg';

import { useProductCartStore } from '../stores/productCart';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutes } from '../routes/stack';

interface IHeaderProps {
  hasBadge?: boolean;
  numberOfItems?: number;
  onPressCart: () => void;
}

const Home = (): JSX.Element => {
  const { availableItems, addToCart, cart } = useProductCartStore();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackRoutes, 'home'>>();

  const Badge = ({ number }) => (
    <View
      position="absolute"
      top={-2}
      right={-4}
      backgroundColor={colors['white.50']}
      borderRadius={30}
      alignItems="center"
      justifyContent="center"
      w={21}
      h={21}
      zIndex={1}
      flexDirection="row"
    >
      <Text fontFamily={fontFamily.semiBold} fontSize={'$xs'} color="$light700">
        {number}
      </Text>
    </View>
  );

  const Header = ({ hasBadge, numberOfItems, onPressCart }: IHeaderProps) => {
    const Cart = () => (
      <View>
        {hasBadge && <Badge number={numberOfItems} />}

        <View pr={'$1'}>
          <BagSVG />
        </View>
      </View>
    );

    return (
      <View
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <MenuSVG />

        <TouchableOpacity activeOpacity={0.8} onPress={onPressCart}>
          <Cart />
        </TouchableOpacity>
      </View>
    );
  };

  const Title = () => (
    <Text
      fontSize={'$3xl'}
      lineHeight={'$3xl'}
      fontFamily={fontFamily.semiBold}
      color="$light700"
    >
      Discover our exclusive watches
    </Text>
  );

  return (
    <Container>
      <Header
        onPressCart={() => {
          if (cart.length >= 1) {
            navigate('cart');
          }
        }}
        numberOfItems={cart.length}
        hasBadge={cart.length >= 1}
      />

      <View mb={'$6'} />

      <Title />

      <View mb={'$4'} />

      <FlatList
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
        data={availableItems}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <ProductItemWithPriceLarge
            image={product.image}
            label={product.name}
            price={`$ ${product.price}`}
            onPress={() => addToCart(product)}
          />
        )}
      />
    </Container>
  );
};

export default Home;
