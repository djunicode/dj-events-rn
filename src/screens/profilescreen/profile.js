/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import ProfileStats from '../../components/ProfileScreen/ProfileStats';
import TaskButton from '../../components/ProfileScreen/TaskButton';
import {
  bgColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';
import {PixelRatio} from 'react-native';
import {heightToDp, widthToDp} from '../../Responsive';

const image = require('../../images/profile.jpg');

const Profile = () => {
  const [core, setCore] = useState([]);
  const [coCommittee, setCoCommittee] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const [isloading, setIsLoading] = useState(true);
  var id = currentUser.id;

  const fetchProfileData = async () => {
    var myHeaders = new Headers();
    setIsLoading(true);
    myHeaders.append('Authorization', 'Token ' + currentUser.Token);
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'http://aryan123456.pythonanywhere.com/api/student_profile/' + id,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setCore(result.coreCommittees);
        setCoCommittee(result.coCommittees);
        setIsLoading(false);
      })
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchProfileData();
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
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor={statusbarColor} />
      <ScrollView>
        <View style={styles.profile}>
          <Image source={image} style={styles.propic} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.nametext}> {currentUser.Name}</Text>
            <Text style={styles.saptext}> ({currentUser.SapID})</Text>
          </View>
          <Text style={styles.emailtext}>{currentUser.Email}</Text>
          <Text style={styles.info}>Department: {currentUser.Department}</Text>
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
          <TaskButton width={140} text={'VIEW TASKS'} route={'Co View Tasks'} />
          <View style={{width: 17}} />
          <TaskButton width={170} text={'REFERRAL'} route={'Referral Count'} />
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
    fontSize: PixelRatio.getFontScale() * 28,
    paddingTop: PixelRatio.getFontScale() * 21,
  },
  saptext: {
    color: 'rgba(255, 255, 255, 0.55)',
    textAlign: 'center',
    fontSize: PixelRatio.getFontScale() * 28,
    paddingTop: PixelRatio.getFontScale() * 21,
  },
  emailtext: {
    fontSize: PixelRatio.getFontScale() * 20,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: PixelRatio.getFontScale() * 20,
  },
  info: {
    fontSize: PixelRatio.getFontScale() * 23,
    color: subtextColor,
    textAlign: 'center',
    paddingTop: PixelRatio.getFontScale() * 20,
  },
  profile: {
    margin: PixelRatio.getFontScale() * 5,
    alignItems: 'center',
    marginTop: PixelRatio.getFontScale() * 30,
  },
  propic: {
    margin: PixelRatio.getFontScale() * 10,
    height: 100,
    width: 100,
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
