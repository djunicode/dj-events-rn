/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {bgColor, subtextColor, textColor} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReferralCount = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Profile Page');
          }}
        />
        <Text style={styles.heading}>REFERRAL COUNT</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: 40,
  },
  heading: {
    paddingLeft: 45,
    color: textColor,
    paddingRight: 35,
    paddingTop: 40,
    fontSize: 30,
  },
});

export default ReferralCount;
