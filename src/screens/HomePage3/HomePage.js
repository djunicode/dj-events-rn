/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchBar from '../../components/SearchBar';
import MyTopTabs from '../../components/TopTabBarNav';
import {
  backDropColor,
  bgColor,
  statusbarColor,
  subtextColor,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';

const image = require('../../images/profile.jpg');

export function HomePage() {
  const {currentUser} = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <Header
        containerStyle={{height: 3, backgroundColor: bgColor}}
        statusBarProps={{backgroundColor: statusbarColor}}
      />
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <Text style={styles.title}>Hi, {currentUser.Name}</Text>
          <TouchableOpacity style={styles.profileImgContainer}>
            <Image source={image} style={styles.profileImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{currentUser.Username}</Text>
        <View style={styles.icon}>
          <SearchBar
            title={'Search for an event'}
            type={'event'}
            callback={(res, load) => {
              console.log(res); // enter code for setting data of searched.
              console.log(load);
            }}
          />
          <View style={{width: 8}} />
          <TouchableOpacity style={styles.sort} onPress={() => {}}>
            <Entypo name="sound-mix" size={25} color={'#dadada'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 25, backgroundColor: bgColor}} />
      <MyTopTabs />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingLeft: 27,
    paddingRight: 26,
  },
  upperRow: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    paddingTop: 27,
    color: subtextColor,
    fontSize: 25,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 42,
    width: 42,
    borderRadius: 40,
    paddingRight: 20,
    paddingLeft: 70,
    paddingTop: 20,
  },
  profileImg: {
    height: 62,
    width: 62,
    borderRadius: 40,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    paddingTop: 10,
  },
  sort: {
    backgroundColor: backDropColor,
    borderRadius: 100,
    width: 60,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
