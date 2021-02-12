/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {width} from '../../Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import Tabs from '../../components/Tabs';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const EventsScreen = (props) => {
  //const [about, setAbout] = useState();
  const [title, setTitle] = useState('DIGIHUNT');
  const [didSpread, setDidSpread] = useState(false);
  const navigation = useNavigation();

  const spreadTitle = () => {
    var length = title.length;
    let title1 = '';
    for (var i = 0; i < length; i++) {
      title1 = title1 + title[i] + ' ';
    }
    setTitle(title1);
    setDidSpread(true);
  };
  useEffect(() => {
    if (!didSpread) {
      spreadTitle();
    }
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#1C2E4A'}}>
      <ScrollView>
        <View>
          <Header
            statusBarProps={{backgroundColor: '#0C233D'}}
            backgroundColor={'#1C2E4A'}
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
          <Tabs />
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
    color: 'white',
    marginTop: 8,
  },
  arrow: {
    marginLeft: 18.51,
    marginTop: 10,
    color: 'white',
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
    backgroundColor: '#1C2E4A',
    position: 'absolute',
    marginTop: 77,
    width: width,
    height: 1,
  },

  text: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  question: {
    color: '#F54B64',
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
