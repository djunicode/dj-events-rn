/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import {
  backDropColor,
  bgColor,
  linearColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';

const OtpScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleUser = (text) => {
    setUsername(text);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />

      <Text style={styles.basetext}> Enter the 4-digit OTP</Text>
      <View style={{paddingTop: 62}}>
        <OTPTextView
          handleTextChange={handleUser}
          inputCount={4}
          tintColor={bgColor}
          offTintColor={bgColor}
          keyboardType="numeric"
          textInputStyle={styles.roundedTextInput}
        />
      </View>
      <View style={{paddingTop: 33}}>
        <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
          <LinearGradient
            colors={[textColor, linearColor]}
            style={styles.button}>
            <Text style={styles.ltext}>SUBMIT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingLeft: 43,
    paddingRight: 42,
  },
  basetext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 26,
    paddingTop: 72,
    color: subtextColor,
  },
  roundedTextInput: {
    borderRadius: 10,
    backgroundColor: backDropColor,
  },

  ltext: {
    textAlign: 'center',
    paddingTop: 15,
    color: subtextColor,
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    height: 55,
    borderRadius: 8,
  },
});

export default OtpScreen;
