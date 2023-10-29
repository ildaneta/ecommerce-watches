import React from 'react';
import { View, Text } from '@gluestack-ui/themed';
import { FlatList } from 'react-native';

import Container from '../components/Container';
import ProductItemWithPriceLarge from '../components/ProductItemWithPriceLarge';

import { fontFamily } from '../../config';
import { productData } from '../api/productData';

import MenuSVG from '../assets/menu.svg';
import BagSVG from '../assets/bag.svg';

const Home = (): JSX.Element => {
  const Header = () => (
    <View
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <MenuSVG />

      <BagSVG />
    </View>
  );

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
      <Header />

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
        data={productData}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <ProductItemWithPriceLarge
            image={product.image}
            label={product.name}
            price={product.price}
            onPress={() => console.log(product)}
          />
        )}
      />
    </Container>
  );
};

export default Home;
