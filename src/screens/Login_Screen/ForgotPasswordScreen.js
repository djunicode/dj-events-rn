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

const ForgotPasswordScreen = ({navigation}) => {
  const [username, setUsername] = useState('');

  const handleUser = (text) => {
    setUsername(text);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />
      <Text style={styles.basetext}> Enter your SAP ID</Text>
      <View style={{paddingTop: 62}}>
        <TextField title={'Enter your SAP ID'} function={handleUser} />
      </View>
      <View style={{paddingTop: 33}}>
        <TouchableOpacity>
          {/* onPress={navigation.navigate('OtpScreen')}> */}
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
  },
});

export default ForgotPasswordScreen;
