import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';

const Home = navigation => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(data => {
        console.log('data----', data);
        setData(data);
      })
      .catch(err => {
        console.log('err----', err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{alignItems: 'center'}}>
        {data && data.length > 0 ? (
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => {
              return <Card data={item} navi={navigation} />;
            }}
          />
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
