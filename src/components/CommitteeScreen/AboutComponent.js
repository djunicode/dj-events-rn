/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {backDropColor, subtextColor} from '../../Constants';

const logo = require('../../images/acm_logo.png');

const About = (props) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <View style={{paddingLeft: 10, paddingRight: 20}}>
        <Text style={styles.title}>About Us</Text>
        <View style={{flexShrink: 1}}>
          <Text style={styles.text}>
          It is a long established fact that a reader will be distracted 
            {/* {props.about} */}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: backDropColor,
    margin: 15,
    borderRadius: 15,
    height: '20%',
  },
  image: {
    width: '35%',
    height: '100%',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 25,
    color: subtextColor,
    textDecorationLine: 'underline',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(255,255,255,0.84)',
    marginRight: 170,
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default About;
