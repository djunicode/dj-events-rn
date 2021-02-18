/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileStats from '../../components/ProfileScreen/ProfileStats';
import {bgColor, statusbarColor, subtextColor} from '../../Constants';

const image = require('../../images/profile.jpg');

const Profile = () => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor={statusbarColor} />
      <ScrollView>
        <View style={{marginLeft: 360, marginTop: 20}}>
          <MaterialIcons
            name="mode-edit"
            size={40}
            style={{color: subtextColor, marginTop: 20}}
            onPress={() => {}}
          />
        </View>
        <View style={styles.profile}>
          <Image source={image} style={styles.propic} />
          <Text style={styles.nametext}> John Smith</Text>
          <Text style={styles.emailtext}>
            {' '}
            johnsmith@svkmmumbai.onmicrosoft.com
          </Text>
          <Text style={styles.info}>
            {' '}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauijn
          </Text>
        </View>
        <View>
          <ProfileStats />
          <ProfileStats />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
  },
  nametext: {
    color: subtextColor,
    textAlign: 'center',
    fontSize: 28,
    paddingTop: 21,
  },
  emailtext: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: 5,
  },
  info: {
    fontSize: 18,
    color: subtextColor,
    textAlign: 'center',
    paddingTop: 10,
  },
  profile: {
    margin: 10,
    alignItems: 'center',
  },
  propic: {
    margin: 20,
    height: 120,
    width: 120,
    borderRadius: 200,
    alignContent: 'center',
  },
  cardcontainer: {
    margin: 30,
    height: 140,
    borderRadius: 20,
    backgroundColor: '#a9a9a9',
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    height: 40,
    width: 80,
  },
});

export default Profile;
