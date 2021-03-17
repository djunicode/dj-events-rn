/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  bgColor,
  statusbarColor,
  subtextColor,
  textColor,
  width,
} from '../../Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import Tabs from '../../components/HomePage/Tabs';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const EventsScreen = ({route}) => {
  //const [about, setAbout] = useState();
  const [title, setTitle] = useState('');
  const [eventsdata, setEventsdata] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getEvent = async () => {
    let v = route.params.id.toString();
    let api = 'http://aryan123456.pythonanywhere.com/api/events/' + v;
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setEventsdata(data);
        setTitle(data.eventName);
        setLoading(false);
      });
  };

  useEffect(() => {
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
      }}>
      <ActivityIndicator size="large" color={textColor} />
    </View>
  ) : (
    <SafeAreaView style={{backgroundColor: bgColor}}>
      <ScrollView>
        <View>
          <Header
            statusBarProps={{backgroundColor: statusbarColor}}
            backgroundColor={bgColor}
            style={styles.Header}
            leftComponent={
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <AntDesign name="left" style={styles.arrow} />
              </TouchableOpacity>
            }
            centerComponent={<Text style={styles.title}>{title}</Text>}
          />
          <Animatable.Image
            animation="flipInX"
            duration={2000}
            delay={1000}
            source={{
              uri:
                'https://cdn.octopix.in/uploads/company-logo/2019/04/22/digihunts-RQEK86REtocLMlz1UA481VYaAGxxwG2ZIQyvqHD5D5LgiT92BhymWV6aK665KkCo1kD74mMjYakzvWaU-350x350.jpg',
            }}
            style={styles.cover}
          />
        </View>
        <View style={{marginTop: 13}}>
          <Tabs data={eventsdata} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Header: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 26,
    fontWeight: '700',
    color: subtextColor,
    marginTop: 8,
    letterSpacing: 5,
  },
  arrow: {
    marginLeft: 18.51,
    marginTop: 10,
    color: subtextColor,
    fontSize: 26,
  },
  tabStyle: {},
  cover: {
    height: width * 0.61,
    width: width * 0.61,
    marginTop: 11,
    alignSelf: 'center',
  },
  filler: {
    backgroundColor: bgColor,
    position: 'absolute',
    marginTop: 77,
    width: width,
    height: 1,
  },

  text: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 16,
    color: subtextColor,
  },
  question: {
    color: textColor,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    marginLeft: 40,
  },
  paragraph: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  contact: {
    marginTop: 17.33,
    marginLeft: 43,
    flexDirection: 'row',
    margin: 2,
  },
});

export default EventsScreen;
