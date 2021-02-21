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
  FlatList,
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

const Events = [
  {name: 'DIGIHUNT', committee: 'ACM COMMITTEE', key: 0},
  {name: 'DIGIHUNT', committee: 'ACM COMMITTEE', key: 1},
  {name: 'DIGIHUNT', committee: 'ACM COMMITTEE', key: 2},
  {name: 'DIGIHUNT', committee: 'ACM COMMITTEE', key: 3},
  {name: 'DIGIHUNT', committee: 'ACM COMMITTEE', key: 4},
];

const Members = [
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 0},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 1},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 2},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 3},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 4},
];
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
              <Text style={{color: textColor, fontSize: 18}}>
                Events related to this committee
              </Text>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 2}}
              keyExtractor={(event) => event.key}
              data={Events}
              horizontal={true}
              renderItem={({item}) => {
                return <Faccard name={item.name} committee={item.committee} />;
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Faculty Members
              </Text>
              <TouchableOpacity style={[styles.dropdown, {marginLeft: 152}]}>
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
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.key}
              data={Members}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard name={item.name} position={item.position} />
                );
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Core Committee Members
              </Text>
              <TouchableOpacity style={[styles.dropdown, {marginLeft: 80}]}>
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
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.key}
              data={Members}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard name={item.name} position={item.position} />
                );
              }}
            />
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
  dropdown: {
    borderRadius: 10,
    width: 90,
    height: 30,
    backgroundColor: backDropColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Committee;
