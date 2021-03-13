/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {bgColor, subtextColor, textColor} from '../../Constants';
import Radiobutton from '../../components/Radio';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Team = [
  {name: 'John Smith', key: 1},
  {name: 'John Smith', key: 2},
  {name: 'John Smith', key: 3},
  {name: 'John Smith', key: 4},
];

const AssignTask = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState('');
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
        <Text style={styles.heading}>ASSIGN TASK</Text>
      </View>
      <Text style={styles.title}>Task to be completed: </Text>
      <View style={{paddingLeft: 20, paddingTop: 10}}>
        <TextInput
          style={styles.textinput}
          placeholder="Title of the task"
          placeholderTextColor="rgba(255, 255, 255, 0.87)"
          maxLength={50}
          value={count}
          onChangeText={(text) => setCount(text)}
        />
        <Text style={{color: 'white', paddingLeft: 310}}>
          {count.length}/50
        </Text>
        <Text style={{paddingTop: 40, color: 'white', fontSize: 25}}>
          Assign it to:{' '}
        </Text>
        <FlatList
          data={Team}
          keyExtractor={(team) => team.key.toString()}
          renderItem={({item}) => {
            return (
              <View style={{flexDirection: 'row', paddingTop: 20}}>
                <Radiobutton />
                <Text style={{paddingLeft: 10, color: 'white', fontSize: 19}}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: 40,
  },
  heading: {
    paddingLeft: 65,
    color: textColor,
    paddingRight: 35,
    paddingTop: 40,
    fontSize: 30,
  },
  title: {
    color: 'white',
    paddingTop: 53,
    paddingLeft: 15,
    fontSize: 25,
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.35)',
    padding: 10,
    fontSize: 17,
    color: 'white',
  },
});

export default AssignTask;
