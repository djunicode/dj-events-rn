/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {backDropColor, subtextColor} from '../../Constants';

const logo = require('../../images/acm_logo.png');

const About = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <View style={{paddingLeft: 10, paddingRight: 20}}>
        <Text style={styles.title}>About Us</Text>
        <View style={{flexShrink: 1}}>
          <Text style={styles.text}>
            The DJ Sanghvi Student Chapter of the Association for Computing
            Machinery, DJSCOE-ACM organizes numerous technical and non-technical
            events. As a student-run body, we proactively try to give back to
            the college through these events, promoting a holistic approach
            learning computer science.
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
  },
  image: {
    width: '50%',
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
