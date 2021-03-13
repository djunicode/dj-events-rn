/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  FlatList,
  LogBox,
} from 'react-native';
import ProfileStats from '../../components/ProfileScreen/ProfileStats';
import TaskButton from '../../components/ProfileScreen/TaskButton';
import {
  bgColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';

const image = require('../../images/profile.jpg');

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sap, setSAP] = useState(0);
  const [dept, setDepartment] = useState('');
  const [core, setCore] = useState([]);
  const [coCommittee, setCoCommittee] = useState([]);

  const fetchProfileData = async () => {
    await fetch('http://aryan123456.pythonanywhere.com/api/student_profile/3/')
      .then((res) => res.json())
      .then((data) => {
        var user = data.first_name + ' ' + data.last_name;
        setSAP(data.sap);
        setEmail(data.email);
        setName(user);
        setDepartment(data.department);
        setCore(data.coreCommittees);
        setCoCommittee(data.coCommittees);
      });
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchProfileData();
  }, []);
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor={statusbarColor} />
      <ScrollView>
        <View style={styles.profile}>
          <Image source={image} style={styles.propic} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.nametext}> {name}</Text>
            <Text style={styles.saptext}> ({sap})</Text>
          </View>
          <Text style={styles.emailtext}>{email}</Text>
          <Text style={styles.info}>Department: {dept}</Text>
        </View>
        <Text style={styles.coretext}>CORE COMMITTEE:</Text>
        <View style={{flexDirection: 'row'}}>
          <TaskButton width={140} text={'ASSIGN TASK'} route={'Assign Tasks'} />
          <View style={{width: 17}} />
          <TaskButton
            width={140}
            text={'VIEW TASKS'}
            route={'Core View Tasks'}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={core}
            keyExtractor={(element) => element.id.toString()}
            renderItem={({item}) => {
              return (
                <ProfileStats
                  position={item.positionAssigned}
                  name={item.committee}
                />
              );
            }}
          />
        </SafeAreaView>
        <Text style={styles.cotext}>CO-COMMITTEE: </Text>
        <View style={{flexDirection: 'row'}}>
          <TaskButton width={140} text={'VIEW TASK'} route={'Co View Tasks'} />
          <View style={{width: 17}} />
          <TaskButton
            width={170}
            text={'REFERRAL COUNT'}
            route={'Referral Count'}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={coCommittee}
            keyExtractor={(element) => element.id.toString()}
            renderItem={({item}) => {
              return (
                <ProfileStats
                  position={item.positionAssigned}
                  name={item.committee}
                />
              );
            }}
          />
        </SafeAreaView>
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
  saptext: {
    color: 'rgba(255, 255, 255, 0.55)',
    textAlign: 'center',
    fontSize: 28,
    paddingTop: 21,
  },
  emailtext: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: 20,
  },
  info: {
    fontSize: 23,
    color: subtextColor,
    textAlign: 'center',
    paddingTop: 20,
  },
  profile: {
    margin: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  propic: {
    margin: 10,
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
  coretext: {
    color: textColor,
    fontSize: 22,
    paddingTop: 36,
    paddingLeft: 24,
  },
  cotext: {
    color: textColor,
    fontSize: 22,
    paddingTop: 26,
    paddingLeft: 24,
  },
});

export default Profile;
