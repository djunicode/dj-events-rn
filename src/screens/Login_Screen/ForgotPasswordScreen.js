/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextField from '../../components/SignUpLogin/TextField';
import {
  bgColor,
  linearColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ToastAndroid} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {
  const [username, setUsername] = useState('');

  const handleUser = (text) => {
    setUsername(text);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />
      <Ionicons
        name="arrow-back"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.basetext}> Enter your SAP ID</Text>
      <View style={{paddingTop: 50}}>
        <TextField title={'Enter your SAP ID'} function={handleUser} />
      </View>
      <View style={{paddingTop: 33}}>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => {
            navigation.navigate('OtpScreen');
            ToastAndroid.show(
              'We have sent you a Mail with the OTP',
              ToastAndroid.SHORT,
            );
          }}>
          <LinearGradient
            colors={[textColor, linearColor]}
            style={styles.button}>
            <Text style={styles.ltext}>GET OTP</Text>
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
  backButton: {
    color: subtextColor,
    fontSize: 36,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  basetext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 38,
    paddingTop: 72,
    color: subtextColor,
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
    marginTop: 15,
  },
});

export default ForgotPasswordScreen;
