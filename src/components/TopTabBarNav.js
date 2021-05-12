import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/HomePage3/Upcoming';
import Latest from '../screens/HomePage3/Latest';
import Following from '../screens/HomePage3/FollowCommittees';
import {bgColor, subtextColor, textColor} from '../Constants';

const TopTab = createMaterialTopTabNavigator();
export default MyTopTabs = ({data}) => {
  
  return (
    <TopTab.Navigator
      backBehavior="Upcoming"
      tabBarOptions={{
        indicatorStyle: {backgroundColor: textColor},
        labelStyle: {
          fontSize: 19,
          color: subtextColor,
          textTransform: 'none',
          fontFamily: 'OpenSans-Regular',
        },
        tabStyle: {width: 139, height: 60},
        style: {backgroundColor: bgColor},
      }}>
      <TopTab.Screen
        name="Upcoming"
        children={() => <Upcoming d={data} />}
        options={{tabBarLabel: 'Upcoming'}}
      />
      <TopTab.Screen
        name="Latest"
        component={Latest}
        options={{tabBarLabel: 'Latest'}}
      />
      <TopTab.Screen
        name="Following"
        component={Following}
        options={{tabBarLabel: 'Following'}}
      />
    </TopTab.Navigator>
  );
};
