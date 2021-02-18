import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {About, Contact, Register, Gallery} from '../HomePage/EventContents.js';
import {bgColor, subtextColor, textColor, width} from '../../Constants';

const Tabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View>
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          labelStyle: styles.textLabel,
          indicatorStyle: styles.indicator,
          style: styles.tabBar,
        }}
        initialRouteName="About">
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 15,
    color: subtextColor,
    textTransform: 'none',
  },
  indicator: {
    borderColor: textColor,
    borderWidth: 1,
    alignContent: 'center',
  },
  tabBar: {
    width: (width * 6) / 7,
    alignSelf: 'center',
    elevation: 0,
    backgroundColor: bgColor,
  },
});

export default Tabs;
