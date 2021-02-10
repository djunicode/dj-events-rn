/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/SearchBar';
import MyTopTabs from '../../components/TopTabBarNav';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import Committee from '../Committeescreen/CommitteeScreen';
import Profile from '../ProfileScreen/Profile';

const image = require('../../images/profile.jpg');

export function HomePage() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaProvider>
      <Header
        containerStyle={{height: 3, backgroundColor: '#1c2e4a'}}
        statusBarProps={{backgroundColor: '#0C233D'}}
      />
      <View style={styles.container}>
        {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
        <View style={styles.upperRow}>
          <Text style={styles.title}>Hi, Adithya</Text>
          <TouchableOpacity style={styles.profileImgContainer}>
            <Image source={image} style={styles.profileImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>adithya2410</Text>
        <View style={styles.icon}>
          <SearchBar title={'Search for an event'} />
          <View style={{width: 8}} />
          <View style={styles.sort}>
            <Entypo name="sound-mix" size={25} color={'#dadada'} />
          </View>
        </View>
      </View>
      <View style={{height: 20, backgroundColor: '#1c2e4a'}} />
      <MyTopTabs />
    </SafeAreaProvider>
  );
}

const BottomTab = createMaterialBottomTabNavigator();

export default class MyBottomTabs extends React.Component {
  render() {
    return (
      <BottomTab.Navigator
        labeled={true}
        shifting={true}
        tabBarOptions={{
          style: {height: 50},
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarColor: '#0C233D',
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                color={'#F54B64'}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarColor: '#0C233D',
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'md-search-sharp' : 'md-search-outline'}
                color={'#F54B64'}
                size={27}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Committee"
          component={Committee}
          options={{
            tabBarColor: '#0C233D',
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'people' : 'people-outline'}
                color={'#F54B64'}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarColor: '#0C233D',
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                color={'#F54B64'}
                size={26}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#1c2e4a',
    paddingLeft: 27,
    paddingRight: 26,
  },
  upperRow: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    paddingTop: 27,
    paddingRight: 57,
    color: 'white',
    fontSize: 25,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 42,
    width: 42,
    borderRadius: 40,
    paddingRight: 20,
    paddingLeft: 110,
    paddingTop: 20,
  },
  profileImg: {
    height: 62,
    width: 62,
    borderRadius: 40,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    paddingTop: 10,
  },
  sort: {
    backgroundColor: '#4e586e',
    borderRadius: 100,
    width: 60,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
