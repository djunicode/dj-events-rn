/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {backDropColor, subtextColor} from '../../Constants';

const ProfileStats = ({position, name}) => {
  return (
    <View
      style={{
        margin: 15,
        height: 100,
        backgroundColor: '#a9a9a9',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '30%',
          backgroundColor: '#505050',
        }}
      />
      <View
        style={{
          width: '70%',
          backgroundColor: backDropColor,
          paddingTop: 20,
        }}>
        <View>
          <Text
            style={{
              color: subtextColor,
              textAlign: 'center',
              fontSize: 24,
            }}>
            {position}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'lightgrey',
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileStats;
