/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileStats = () => {
  return (
    <View
      style={{
        margin: 30,
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
          backgroundColor: '#4E586E',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 29,
        }}>
        <View>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 24,
              fontFamily: 'roboto',
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
              colors={['#F54B64', '#F78361']}
              style={{borderRadius: 5, height: 26}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
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
              colors={['#F54B64', '#F78361']}
              style={{borderRadius: 5, height: 26}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                REFERAL COUNT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileStats;
