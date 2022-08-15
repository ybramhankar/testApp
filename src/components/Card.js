import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = props => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        console.log('.....', props.data);
        props.navi.navigation.push('ProductDetails', {item: props.data});
      }}>
      <Image
        style={styles.imgStyle}
        source={{uri: props.data.image}}
        resizeMode={'contain'}
      />
      <View style={styles.productInfo}>
        <View style={{height: 90, overflow: 'scroll', marginVertical: 2}}>
          <Text style={styles.productTitle}>{props.data.title}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={styles.txtstyle}>Price: {props.data.price}</Text>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: '#442D53', borderRadius: 10}}
            onPress={() => {}}>
            <Text style={styles.addTocart}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 360,
    width: 180,
    alignItems: 'center',
  },
  imgStyle: {
    height: 200,
    width: 170,
  },
  productInfo: {
    marginVertical: 10,
  },
  productTitle: {
    fontSize: 18,
    color: '#000',
    // marginVertical: 10,
  },
  txtstyle: {
    fontSize: 15,
    color: '#000',
  },
  addTocart: {
    fontSize: 15,
    color: '#FFF',
  },
});
