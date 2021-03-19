/* eslint-disable react-native/no-inline-styles */
import React, { useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
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



const OtpScreen = ({navigation}) => {
 
  const [username, setUsername] = useState('');


  const handleUser = (text) => {
    setUsername(text);
  };


  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />
      <Text  style={styles.basetext}> Enter 4-digit number sent</Text>
      <View style={{paddingTop: 62}}>
          {/* <TextField  function={handleUser} /> */}
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
          <TouchableOpacity onPress={navigation.navigate('NewPass')}>
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
    fontSize: 26,
    paddingTop: 72,
    color: subtextColor,
  },
  roundedTextInput: {
    borderRadius: 10,
    backgroundColor:backDropColor,
    
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
