/* Search screen is used to display all the committees.
getDefaultData function is used to get and set the data for all the committees.*/
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
import ComCard from '../../components/SearchScreen/ComCard';
import SearchBar from '../../components/SearchBar';
import {
  backDropColor,
  bgColor,
  statusbarColor,
  textColor,
} from '../../Constants';
import axios from '../../controllers/axios';
import {PixelRatio} from 'react-native';
import {heightToDp, widthToDp} from '../../Responsive';

const image = require('../../images/Logo.jpg');

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getDefaultData = () => {
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

  useEffect(() => {
    getDefaultData();
    //getSearchBar();
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
    <SafeAreaView
      style={{
        backgroundColor: bgColor,
        paddingTop: PixelRatio.getFontScale() * 40,
        flex: 1,
      }}>
      <StatusBar backgroundColor={statusbarColor} />

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: PixelRatio.getFontScale() * 20,
          paddingRight: PixelRatio.getFontScale() * 20,
        }}>
        <SearchBar
          title={'Search Committees'}
          type={'committee'}
          callback={setData}
        />
        <View style={{width: PixelRatio.getFontScale() * 8}} />
        <View style={{width: PixelRatio.getFontScale() * 8}} />
      </View>
      <View
        style={{
          marginTop: PixelRatio.getFontScale() * 20,
          marginLeft: PixelRatio.getFontScale() * 20,
          marginRight: PixelRatio.getFontScale() * 20,
        }}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: PixelRatio.getFontScale() * 200,
          }}
          keyExtractor={(committee) => committee.id.toString()}
          data={data}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <ComCard
                name={item.committeeName}
                followers={item.followers}
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
  sort: {
    backgroundColor: backDropColor,
    borderRadius: 100,
    width: widthToDp('12%'),
    height: heightToDp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;
