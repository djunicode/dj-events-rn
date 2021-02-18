/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  backDropColor,
  linearColor,
  subtextColor,
  textColor,
} from '../../Constants';

const ProfileStats = () => {
  return (
    <View
      style={{
        margin: 10,
        height: 170,
        borderRadius: 20,
        backgroundColor: '#a9a9a9',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '30%',
          backgroundColor: '#505050',
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: 29,
        }}
      />
      <View
        style={{
          width: '70%',
          backgroundColor: backDropColor,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 29,
        }}>
        <View>
          <Text
            style={{
              color: subtextColor,
              textAlign: 'center',
              fontSize: 24,
            }}>
            {' '}
            Creatives Mentee
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'lightgrey',
              textAlign: 'center',
            }}>
            {' '}
            ACM CO-COMMITTEE
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            borderTopColor: 'black',
            borderTopWidth: 0.3,
          }}>
          <TouchableOpacity
            style={{margin: 10, marginTop: 26, height: 26, width: 80}}>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={{borderRadius: 5, height: 26}}>
              <Text
                style={{
                  fontSize: 14,
                  color: subtextColor,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                TASK
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{margin: 10, marginTop: 26, height: 26, width: 130}}>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={{borderRadius: 5, height: 26}}>
              <Text
                style={{
                  fontSize: 14,
                  color: subtextColor,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                REFERRAL COUNT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileStats;
