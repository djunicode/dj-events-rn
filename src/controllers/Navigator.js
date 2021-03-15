import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login_Screen/LoginScreen';
import SignUp from '../screens/SignUp_Screen/SignUpScreen';
import HomePage from '../screens/HomePage3/HomePage';
import Upcoming from '../screens/HomePage3/Upcoming';
import Latest from '../screens/HomePage3/Latest';
import Following from '../screens/HomePage3/FollowCommittees';
import EventsScreen from '../screens/HomePage3/EventsScreen';
import Committee from '../screens/Committeescreen/CommitteeScreen';
import Profile from '../screens/ProfileScreen/Profile';
import CoViewTask from '../screens/ProfileScreen/CoViewTask';
import CoreViewTask from '../screens/ProfileScreen/CoreViewTask';
import ReferralCount from '../screens/ProfileScreen/ReferralCount';
import AssignTask from '../screens/ProfileScreen/AssignTask';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default class Navigator extends React.Component {
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
