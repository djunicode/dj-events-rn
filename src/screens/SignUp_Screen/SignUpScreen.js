/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Password from '../../components/SignUpLogin/PasswordTextBox';
import TextField from '../../components/SignUpLogin/TextField';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import {
  backDropColor,
  bgColor,
  linearColor,
  subtextColor,
  textColor,
} from '../../Constants';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView>
          <View>
            <Animatable.Text
              style={styles.basetext}
              animation="fadeInDown"
              duration={2000}
              delay={500}>
              Let's get {'\n'}you started !
            </Animatable.Text>
            <Animatable.View
              animation="bounceInLeft"
              duration={2000}
              delay={1000}>
              <View style={{paddingTop: 41}}>
                <TextField title={'Full Name'} />
              </View>
              <View style={{paddingTop: 9}}>
                <TextField title={'SAP ID'} />
              </View>
            </Animatable.View>
            <Animatable.View
              animation="bounceInRight"
              duration={2000}
              delay={1500}>
              <View style={{paddingTop: 41}}>
                <TextField title={'Username'} />
              </View>
              <View style={{paddingTop: 9}}>
                <Password title={'Password'} />
              </View>
              <View style={{paddingTop: 9}}>
                <Password title={'Confirm Password'} />
              </View>
            </Animatable.View>
            <Animatable.View
              style={{paddingTop: 41}}
              animation="fadeInUp"
              duration={2000}
              delay={2000}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <LinearGradient
                  colors={[textColor, linearColor]}
                  style={styles.button}>
                  <Text style={styles.ltext}>SIGNUP AS A STUDENT</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 44,
    paddingRight: 41,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
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
    paddingLeft: 13,
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
