/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ComCard from '../../components/SearchScreen/ComCard';
import SearchBar from '../../components/SearchBar';
import {
  backDropColor,
  bgColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const getSearchData = async () => {
    setIsLoading(true);
    await fetch('http://aryan123456.pythonanywhere.com/api/committees')
      .then((res) => res.json())
      .then((search) => {
        setData(search);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSearchData();
  }, []);

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
        }}>
        <ActivityIndicator size="large" color={textColor} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: bgColor, paddingTop: 40}}>
      <StatusBar backgroundColor={statusbarColor} />

      <View style={{flexDirection: 'row', paddingLeft: 19, paddingRight: 19}}>
        <SearchBar title={'Search Committees'} />
        <View style={{width: 8}} />
        <TouchableOpacity style={styles.sort}>
          <Entypo name="sound-mix" size={25} color={'#dadada'} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 120}}
          keyExtractor={(committee) => committee.id.toString()}
          data={data}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <ComCard
                name={item.committeeName}
                followers={42}
                image={
                  'https://www.acm.org/binaries/content/gallery/acm/ctas/ambassadors-for-acm.jpg/ambassadors-for-acm.jpg/acm%3Adesktopcta'
                }
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Searchbar: {
    height: 40,
    width: '73%',
    borderRadius: 100,
    marginTop: 27,
    marginLeft: 19,
    backgroundColor: backDropColor,
  },
  searchInput: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto',
    paddingTop: 9,
    paddingBottom: 9,
    color: subtextColor,
  },
  filter: {
    marginLeft: 8,
    marginTop: 27,
    width: 50,
    height: 40,
    borderRadius: 100,
    backgroundColor: backDropColor,
    marginRight: 19,
  },
  sort: {
    backgroundColor: backDropColor,
    borderRadius: 100,
    width: 60,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ficon: {
    position: 'absolute',
    marginTop: 32,
    marginLeft: 23,
    color: '#2E2E2E',
  },
});

export default SearchScreen;
