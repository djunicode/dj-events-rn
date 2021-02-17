/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Faccard from '../../components/CommitteeScreen/FaceCard';
import Profilecard from '../../components/CommitteeScreen/Profilecard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const image = require('../../images/events.jpg');

const Committee = () => {
  const [notify, setNotify] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="#0C233D" />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              style={{color: '#fff', marginHorizontal: 8}}
            />
            <Text style={styles.heading}>ACM COMMITTEE</Text>
            {notify ? (
              <MaterialCommunityIcons
                name="bell-ring"
                style={styles.icon}
                size={30}
                onPress={() => {
                  setNotify(false);
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name="bell"
                style={styles.icon}
                size={30}
                onPress={() => {
                  setNotify(true);
                }}
              />
            )}
          </View>
          <View>
            <Image source={image} style={styles.image} />
          </View>
          <View>
            <View style={{margin: 3, flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#F54B64',
                  fontSize: 18,
                  fontFamily: 'roboto',
                }}>
                {' '}
                Events related to this committee
              </Text>
            </View>
            <ScrollView style={{marginVertical: 2}} horizontal={true}>
              <Faccard />
              <Faccard />
              <Faccard />
            </ScrollView>
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#F54B64',
                  fontSize: 18,
                }}>
                {' '}
                Faculty Members
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 90,
                  height: 30,
                  backgroundColor: '#4E586E',
                  marginLeft: 152,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{marginVertical: 5}} horizontal={true}>
              <Profilecard />
              <Profilecard />
              <Profilecard />
            </ScrollView>
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#F54B64',
                  fontSize: 18,
                  fontFamily: 'roboto',
                }}>
                {' '}
                Core Committee Members
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 90,
                  height: 30,
                  backgroundColor: '#4E586E',
                  marginLeft: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{marginVertical: 5}} horizontal={true}>
              <Profilecard />
              <Profilecard />
              <Profilecard />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1C2E4A',
    height: '100%',
    paddingTop: 35,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 6,
    textDecorationLine: 'underline',
    fontFamily: 'Merriweather-Regular',
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: 140,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    backgroundColor: '#4E586E',
  },
  years: {
    borderRadius: 10,
    width: 70,
    height: 30,
    backgroundColor: '#4E586E',
  },
  icon: {
    color: '#fff',
    marginLeft: 30,
    marginVertical: 6,
  },
});
export default Committee;
