import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login_Screen/LoginScreen';
import SignUp from './src/screens/SignUp_Screen/SignUpScreen';
import HomePage from './src/screens/HomePage3/HomePage';
import Upcoming from './src/screens/HomePage3/Upcoming';
import Latest from './src/screens/HomePage3/Latest';
import Following from './src/screens/HomePage3/FollowCommittees';
import EventsScreen from './src/screens/HomePage3/EventsScreen';
import {NavigationContainer} from '@react-navigation/native';

export class Page extends React.Component {
  render() {
    return <HomePage />;
  }
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Upcoming" component={Upcoming} />
          <Stack.Screen name="Latest" component={Latest} />
          <Stack.Screen name="Committees you follow" component={Following} />
          <Stack.Screen name="Events Description" component={EventsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
