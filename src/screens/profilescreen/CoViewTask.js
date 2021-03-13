/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import {bgColor, subtextColor, textColor} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Tasks = [
  {task: 'Task 1', name: 'John Smith', key: 1},
  {task: 'Task 2', name: 'John Smith', key: 2},
  {task: 'Task 3', name: 'John Smith', key: 3},
  {task: 'Task 4', name: 'John Smith', key: 4},
];

const CoViewTask = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.heading}>TASK</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'rgba(255,255,255,0.25)',
          borderBottomWidth: 1,
          paddingTop: 24,
        }}
      />
      <Text style={styles.heading1}>UNICODE TASK LIST</Text>
      <FlatList
        data={Tasks}
        style={{paddingTop: 9, paddingLeft: 14}}
        keyExtractor={(task) => task.key.toString()}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'column', paddingTop: 20}}>
              <Text style={{fontSize: 20, color: 'white'}}>
                {item.key}. {item.task}
              </Text>
              <Text style={{fontSize: 20, color: 'white', paddingLeft: 20}}>
                Assigned by: {item.name}
              </Text>
            </View>
          );
        }}
      />
      <View
        style={{
          borderBottomColor: 'rgba(255,255,255,0.25)',
          borderBottomWidth: 1,
          paddingTop: 24,
        }}
      />
      <Text style={styles.heading1}>ACM TASK LIST</Text>
      <FlatList
        data={Tasks}
        style={{paddingTop: 9, paddingLeft: 14}}
        keyExtractor={(task) => task.key.toString()}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'column', paddingTop: 20}}>
              <Text style={{fontSize: 20, color: 'white'}}>
                {item.key}. {item.task}
              </Text>
              <Text style={{fontSize: 20, color: 'white', paddingLeft: 20}}>
                Assigned by: {item.name}
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
    paddingLeft: 100,
    color: textColor,
    paddingRight: 85,
    paddingTop: 40,
    fontSize: 30,
  },
  heading1: {
    color: textColor,
    paddingLeft: 19,
    paddingTop: 9,
    fontSize: 20,
  },
});

export default CoViewTask;
