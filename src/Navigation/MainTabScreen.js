import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {statusbarColor, textColor} from '../Constants';
import {HomePage} from '../screens/HomePage3/HomePage';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import Committee from '../screens/Committeescreen/CommitteeScreen';
import Profile from '../screens/ProfileScreen/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import EventsScreen from '../screens/HomePage3/EventsScreen';
import CoViewTask from '../screens/ProfileScreen/CoViewTask';
import CoreViewTask from '../screens/ProfileScreen/CoreViewTask';
import ReferralCount from '../screens/ProfileScreen/ReferralCount';
import AssignTask from '../screens/ProfileScreen/AssignTask';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CommitteeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
  const BottomTab = createMaterialBottomTabNavigator();
  return (
    <BottomTab.Navigator
      labeled={true}
      shifting={true}
      tabBarOptions={{
        style: {height: 50},
      }}
      initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={textColor}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'md-search-sharp' : 'md-search-outline'}
              color={textColor}
              size={27}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Committee"
        component={CommitteeStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'people' : 'people-outline'}
              color={textColor}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={textColor}
              size={26}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen name="Event" component={EventsScreen} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Co View Tasks" component={CoViewTask} />
      <ProfileStack.Screen name="Core View Tasks" component={CoreViewTask} />
      <ProfileStack.Screen name="Referral Count" component={ReferralCount} />
      <ProfileStack.Screen name="Assign Tasks" component={AssignTask} />
    </ProfileStack.Navigator>
  );
};
const CommitteeStackScreen = () => {
  return (
    <CommitteeStack.Navigator screenOptions={{headerShown: false}}>
      <CommitteeStack.Screen name="Committee" component={Committee} />
    </CommitteeStack.Navigator>
  );
};

export default MainTabScreen;
