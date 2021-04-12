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
import TextField from '../../components/SignUpLogin/TextField';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  backDropColor,
  bgColor,
  linearColor,
  statusbarColor,
  subtextColor,
  textColor,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, currentUser} = useContext(AuthContext);
  const navigation = useNavigation();

  const handleUser = (text) => {
    setUsername(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={statusbarColor} />
      <Animatable.Text
        style={styles.basetext}
        animation="fadeInDown"
        duration={2000}
        useNativeDriver={true}>
        Welcome {'\n'}Back !
      </Animatable.Text>
      <Animatable.View
        animation="fadeInRight"
        delay={1000}
        duration={1000}
        useNativeDriver={true}>
        <View style={{paddingTop: 62}}>
          <TextField title={'SAP ID or Username'} function={handleUser} />
        </View>
        <View style={{paddingTop: 17}}>
          <Password title={'Password'} function={handlePassword} />
        </View>
        <View style={styles.row}>
          <View style={{paddingRight: 5, paddingTop: 2}}>
            <MaterialCommunityIcons
              name={
                remember ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
              }
              style={{color: subtextColor}}
              size={20}
              onPress={() => {
                setRemember(!remember);
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'OpenSans-Regular',
              color: subtextColor,
            }}>
            Remember Me
          </Text>
          <TouchableOpacity
            style={{paddingLeft: 40}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 17,
                fontFamily: 'OpenSans-Regular',
                color: subtextColor,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        delay={1500}
        useNativeDriver={true}>
        <View style={{paddingTop: 33}}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              AsyncStorage.setItem('username', username);
              AsyncStorage.setItem('password', password);
              signIn(username, password);
            }}>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={styles.button}>
              <Text style={styles.ltext}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 48,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: subtextColor}} />
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'OpenSans-Regular',
                color: subtextColor,
              }}>
              Don't Have an Account?
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: subtextColor}} />
        </View>
        <View style={{paddingTop: 14}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={styles.button}>
              <Text style={styles.ltext}>SIGNUP AS A STUDENT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
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
  textinput: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: backDropColor,
    height: 47,
    width: 315,
    borderRadius: 40,
    fontSize: 15,
    paddingLeft: 22,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
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
  circle: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
