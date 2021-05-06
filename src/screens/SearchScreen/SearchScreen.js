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
import axios from '../../controllers/axios';

const image = require('../../images/Logo.jpg');

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getSearchData = () => {
    setIsLoading(true);
    try {
      axios.get('/committees').then((search) => {
        setData(search.data);
        setIsLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getSearchBar = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({q: 'DJ ACM'});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'http://aryan123456.pythonanywhere.com/api/committee_search/',
      requestOptions,
    )
      .then((response) => response.json)
      .then((result) => console.log(result))
      .catch((error) => console.log('error: ', error));
  };

  useEffect(() => {
    getSearchData();
    getSearchBar();
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
          contentContainerStyle={{paddingBottom: 200}}
          keyExtractor={(committee) => committee.id.toString()}
          data={data}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <ComCard
                name={item.committeeName}
                followers={42}
                image={image}
                id={item.id}
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
