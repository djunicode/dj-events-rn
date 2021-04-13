/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Faccard from '../../components/CommitteeScreen/FaceCard';
import Profilecard from '../../components/CommitteeScreen/Profilecard';
import About from '../../components/CommitteeScreen/AboutComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  bgColor,
  statusbarColor,
  textColor,
  backDropColor,
  subtextColor,
} from '../../Constants';
import axios from '../../controllers/axios';

const Committee = ({route, navigation}) => {
  const [notify, setNotify] = useState(false);
  const [data, setData] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [events, setEvents] = useState([]);
  const [core, setCore] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchCommitteeData = async () => {
    let v = route.params.id.toString();
    setIsLoading(true);
    try {
      await axios.get(`/committee_detail/${v}/`).then((json) => {
        setData(json.data);
        setEvents(json.data.events);
        setFaculty(json.data.facultyMembers);
        setCore(json.data.coreCommitteeMembers);
        setIsLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCommitteeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
      <StatusBar backgroundColor={statusbarColor} />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              style={{color: subtextColor, marginHorizontal: 8}}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>{data.committeeName}</Text>
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
          <About about={data.committeeDescription} />
          <View>
            <View style={{margin: 3, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Events related to this committee
              </Text>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 2}}
              keyExtractor={(event) => event.id.toString()}
              data={events}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Faccard
                    name={item.eventName}
                    committee={data.committeeName}
                  />
                );
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Faculty Members
              </Text>
              <View style={[styles.dropdown, {marginLeft: 152}]}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
              </View>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.id.toString()}
              data={faculty}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard name={item.name} position={item.department} />
                );
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Core Committee Members
              </Text>
              <View style={[styles.dropdown, {marginLeft: 80}]}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
              </View>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.id.toString()}
              data={core}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard
                    name={item.student}
                    position={item.positionAssigned}
                  />
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
    //paddingBottom: 20,
    //position: 'absolute',
  },
  header: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 30,
    color: subtextColor,
    marginHorizontal: 20,
    textDecorationLine: 'underline',
    fontFamily: 'Merriweather-Regular',
    textAlign: 'center',
    alignItems: 'center',
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
    marginLeft: 370,
    marginVertical: 6,
    position: 'absolute',
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
