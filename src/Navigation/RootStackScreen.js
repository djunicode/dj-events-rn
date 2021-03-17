import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login_Screen/LoginScreen';
import SignUp from '../screens/SignUp_Screen/SignUpScreen';
import MainTabScreen from './MainTabScreen';

const RootStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTabScreen} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
