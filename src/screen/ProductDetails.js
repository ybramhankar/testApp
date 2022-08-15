import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProductDetails = props => {
  const itemData = props.route.params.item;
  const data = {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={{flex: 1}}>
        <View style={{height: 250, marginVertical: 20}}>
          <Image
            style={styles.imgStyle}
            source={{uri: itemData.image}}
            resizeMode={'contain'}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            color: '#000',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          {itemData.title}
        </Text>

        <Text style={{color: '#000', marginHorizontal: 20, fontSize: 15}}>
          {itemData.description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <Text style={{color: '#000', fontSize: 15, marginVertical: 5}}>
            Category: {itemData.category}
          </Text>
          <Text style={{color: '#000', fontSize: 15, marginVertical: 5}}>
            Rating: {itemData.rating.rate}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 20,
            borderRadius: 10,
            borderColor: '#442D53',
            borderWidth: 1,
            padding: 10,
          }}>
          <Text style={{color: '#000', fontSize: 20}}>
            Price:{itemData.price} $
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#442D53',
            height: 40,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 20}}>Add To Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgStyle: {
    // width: '100%',
    height: 200,
  },
});
