import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login_Screen/LoginScreen';
import SignUp from './src/screens/SignUp_Screen/SignUpScreen';
import HomePage from './src/screens/HomePage3/HomePage';
import Upcoming from './src/screens/HomePage3/Upcoming';
import Latest from './src/screens/HomePage3/Latest';
import Following from './src/screens/HomePage3/FollowCommittees';
import EventsScreen from './src/screens/HomePage3/EventsScreen';
import Committee from './src/screens/Committeescreen/CommitteeScreen';
import Profile from './src/screens/ProfileScreen/Profile';
import CoViewTask from './src/screens/ProfileScreen/CoViewTask';
import CoreViewTask from './src/screens/ProfileScreen/CoreViewTask';
import ReferralCount from './src/screens/ProfileScreen/ReferralCount';
import AssignTask from './src/screens/ProfileScreen/AssignTask';
import {NavigationContainer} from '@react-navigation/native';

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
          <Stack.Screen name="Committee Page" component={Committee} />
          <Stack.Screen name="Profile Page" component={Profile} />
          <Stack.Screen name="Co View Tasks" component={CoViewTask} />
          <Stack.Screen name="Core View Tasks" component={CoreViewTask} />
          <Stack.Screen name="Referral Count" component={ReferralCount} />
          <Stack.Screen name="Assign Tasks" component={AssignTask} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
