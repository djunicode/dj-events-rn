/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Password from '../../components/PasswordTextBox';
import TextField from '../../components/TextField';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.basetext}>Let's get {'\n'}you started !</Text>
      <View style={{paddingTop: 41}}>
        <TextField title={'Full Name'} />
      </View>
      <View style={{paddingTop: 9}}>
        <TextField title={'SAP ID'} />
      </View>
      <View style={{paddingTop: 41}}>
        <TextField title={'Username'} />
      </View>
      <View style={{paddingTop: 9}}>
        <Password title={'Password'} />
      </View>
      <View style={{paddingTop: 9}}>
        <Password title={'Confirm Password'} />
      </View>
      <View style={{paddingTop: 41}}>
        <TouchableOpacity>
          <LinearGradient colors={['#F54B64', '#F78361']} style={styles.button}>
            <Text style={styles.ltext}>SIGNUP AS A STUDENT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 44,
    paddingRight: 41,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1c2e4a',
  },
  basetext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 38,
    paddingTop: 72,
    color: 'white',
  },
  textinput: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: '#4e586e',
    height: 47,
    width: 315,
    borderRadius: 40,
    fontSize: 15,
    paddingLeft: 13,
  },
  ltext: {
    textAlign: 'center',
    paddingTop: 15,
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    height: 55,
    borderRadius: 8,
  },
});
