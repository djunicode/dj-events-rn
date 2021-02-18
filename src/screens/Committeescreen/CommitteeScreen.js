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
} from 'react-native';
import Faccard from '../../components/CommitteeScreen/FaceCard';
import Profilecard from '../../components/CommitteeScreen/Profilecard';
import About from '../../components/CommitteeScreen/AboutComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  bgColor,
  statusbarColor,
  textColor,
  backDropColor,
  subtextColor,
} from '../../Constants';
const Committee = () => {
  const [notify, setNotify] = useState(false);
  return (
    <>
      <StatusBar backgroundColor={statusbarColor} />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              style={{color: subtextColor, marginHorizontal: 8}}
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
          <About />
          <View>
            <View style={{margin: 3, flexDirection: 'row'}}>
              <Text
                style={{
                  color: textColor,
                  fontSize: 18,
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
                  color: textColor,
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
                  backgroundColor: backDropColor,
                  marginLeft: 152,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: subtextColor}}
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
                  color: textColor,
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
                  backgroundColor: backDropColor,
                  marginLeft: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: subtextColor}}
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
    backgroundColor: bgColor,
    height: '100%',
    paddingTop: 35,
    paddingBottom: 20,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 30,
    color: subtextColor,
    marginHorizontal: 6,
    textDecorationLine: 'underline',
    fontFamily: 'Merriweather-Regular',
    textAlign: 'center',
  },
  text: {
    backgroundColor: backDropColor,
  },
  years: {
    borderRadius: 10,
    width: 70,
    height: 30,
    backgroundColor: backDropColor,
  },
  icon: {
    color: subtextColor,
    marginLeft: 30,
    marginVertical: 6,
  },
});
export default Committee;
