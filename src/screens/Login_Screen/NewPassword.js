/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Password from '../../components/SignUpLogin/PasswordTextBox';
import {
  backDropColor,
  bgColor,
  linearColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';

const NewPassword= ({navigation}) => {
  
  const [newpassword, setNewPass] = useState('');
  const [confirmpassword, setPassword] = useState('');

  const handleNewPass = (text) => {
    setNewPass(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />
      
        <View style={{paddingTop: 20}}>
        <Text  style={styles.basetext}> Enter new password</Text>
          <Password title={'Password'} function={handleNewPass} />
        </View>
        <View style={{paddingTop: 16}}>
        <Text  style={styles.basetext}> Re-enter password</Text>
          <Password title={'Confirm Password'} function={handlePassword} />
        </View>
        
      
        <View style={{paddingTop: 20}}>
          <TouchableOpacity>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={styles.button}>
              <Text style={styles.ltext}>Reset Password</Text>
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
    paddingTop:20,
    paddingBottom:10,
    color: subtextColor,
  },
  ltext: {
    textAlign: 'center',
    padding: 15,
    color: subtextColor,
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
      marginTop:40,
    height: 50,
    borderRadius: 8,
  }
});

export default NewPassword;
