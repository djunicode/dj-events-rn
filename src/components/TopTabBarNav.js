import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/HomePage3/Upcoming';
import Latest from '../screens/HomePage3/Latest';
import Following from '../screens/HomePage3/FollowCommittees';

const TopTab = createMaterialTopTabNavigator();
export default function MyTopTabs() {
  return (
    <TopTab.Navigator
      backBehavior="Upcoming"
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#F54B64'},
        labelStyle: {
          fontSize: 19,
          color: 'white',
          textTransform: 'none',
          fontFamily: 'OpenSans-Regular',
        },
        tabStyle: {width: 139, height: 60},
        style: {backgroundColor: '#1c2e4a'},
      }}>
      <TopTab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{tabBarLabel: 'Upcoming'}}
      />
      <TopTab.Screen
        name="Latest"
        component={Latest}
        options={{tabBarLabel: 'Latest'}}
      />
      <TopTab.Screen
        name="Committees you follow"
        component={Following}
        options={{tabBarLabel: 'Committees you follow'}}
      />
    </TopTab.Navigator>
  );
}
