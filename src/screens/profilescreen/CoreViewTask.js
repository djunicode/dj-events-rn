/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {bgColor, subtextColor, textColor} from '../../Constants';

const Tasks = [
  {task: 'Task 1', name: 'John Smith', key: 1},
  {task: 'Task 2', name: 'John Smith', key: 2},
  {task: 'Task 3', name: 'John Smith', key: 3},
  {task: 'Task 4', name: 'John Smith', key: 4},
];

const CoreViewTask = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Profile Page');
          }}
        />
        <Text style={styles.heading}>VIEW TASK</Text>
      </View>
      <FlatList
        data={Tasks}
        style={{paddingTop: 50, paddingLeft: 14}}
        keyExtractor={(task) => task.key.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{flexDirection: 'row', paddingTop: 15, paddingLeft: 10}}>
              <Text style={{fontSize: 20, color: 'white'}}>{item.task}</Text>
              <Text style={{fontSize: 20, color: 'white', paddingLeft: 130}}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: 40,
  },
  heading: {
    paddingLeft: 80,
    color: textColor,
    paddingRight: 85,
    paddingTop: 40,
    fontSize: 30,
  },
});

export default CoreViewTask;
