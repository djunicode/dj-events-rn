/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const image = require('../images/events.jpg');

const EventCard = (props) => {
  const navigation = useNavigation();
  return (
    <Animatable.View
      style={styles.container}
      animation="slideInLeft"
      duration={2000}
      delay={2000}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Events Description')}>
        <Image source={image} style={{width: 370}} />
        <Text style={styles.title}>DIGIHUNT</Text>
        <Text style={styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <TouchableOpacity>
          <Text style={styles.know}>KNOW MORE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.committee}>COMMITTEE NAME</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 237,
    width: 370,
    backgroundColor: '#3e4658',
  },
  text: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 9,
    fontSize: 15,
    color: 'rgba(255,255,255,0.87)',
  },
  title: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 110,
    fontSize: 27,
    position: 'absolute',
  },
  info: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },
  know: {
    color: '#F54B64',
    fontSize: 15,
  },
  committee: {
    color: '#F54B64',
    fontSize: 15,
    paddingLeft: 106,
  },
});

export default EventCard;
