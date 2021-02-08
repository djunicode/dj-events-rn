/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ComCard from '../../components/ComCard';
import SearchBar from '../../components/SearchBar';

const Committees = [
  {name: 'Committee 1'},
  {name: 'Committee 2'},
  {name: 'Committee 3'},
  {name: 'Committee 4'},
  {name: 'Committee 5'},
  {name: 'Committee 6'},
  {name: 'Committee 7'},
  {name: 'Committee 8'},
  {name: 'Committee 9'},
  {name: 'Committee 10'},
];

const SearchScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#1C2E4A', paddingTop: 40}}>
      <StatusBar backgroundColor="#0C233D" />

      <View style={{flexDirection: 'row', paddingLeft: 19, paddingRight: 19}}>
        <SearchBar title={'Search Committees'} />
        <View style={{width: 8}} />
        <View style={styles.sort}>
          <Entypo name="sound-mix" size={25} color={'#dadada'} />
        </View>
      </View>
      <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 120}}
          keyExtractor={(committee) => committee.name}
          data={Committees}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <ComCard
                name={item.name}
                followers={43}
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
    backgroundColor: '#4E586E',
  },
  searchInput: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto',
    paddingTop: 9,
    paddingBottom: 9,
    color: 'white',
  },
  filter: {
    marginLeft: 8,
    marginTop: 27,
    width: 50,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#4E586E',
    marginRight: 19,
  },
  sort: {
    backgroundColor: '#4e586e',
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
