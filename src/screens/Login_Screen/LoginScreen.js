/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Password from '../../components/PasswordTextBox';
import TextField from '../../components/TextField';
import {RadioButton} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    Remember: false,
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Animatable.Text
          style={styles.basetext}
          animation="fadeInDown"
          duration={2000}>
          Welcome {'\n'}Back !
        </Animatable.Text>
        <Animatable.View animation="fadeInRight" delay={1000} duration={1000}>
          <View style={{paddingTop: 62}}>
            <TextField title={'SAP ID or Username'} />
          </View>
          <View style={{paddingTop: 17}}>
            <Password title={'Password'} />
          </View>
          <View style={styles.row}>
            <View style={{paddingRight: 10, paddingTop: 5}}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  this.setState({Remember: true});
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'OpenSans-Regular',
                color: 'white',
              }}>
              Remember Me
            </Text>

            <TouchableOpacity style={{paddingLeft: 40}}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  fontSize: 17,
                  fontFamily: 'OpenSans-Regular',
                  color: 'white',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={1000} delay={1500}>
          <View style={{paddingTop: 33}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <LinearGradient
                colors={['#F54B64', '#F78361']}
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
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'OpenSans-Regular',
                  color: 'white',
                }}>
                {' '}
                Don't Have an Account?{' '}
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          </View>
          <View style={{paddingTop: 14}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <LinearGradient
                colors={['#F54B64', '#F78361']}
                style={styles.button}>
                <Text style={styles.ltext}>SIGNUP AS A STUDENT</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1c2e4a',
    paddingLeft: 43,
    paddingRight: 42,
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
    paddingLeft: 22,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
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
