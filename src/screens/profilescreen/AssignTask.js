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
import {PixelRatio} from 'react-native';

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
      <View
        style={{
          paddingLeft: PixelRatio.getFontScale() * 20,
          paddingTop: PixelRatio.getFontScale() * 10,
        }}>
        <TextInput
          style={styles.textinput}
          placeholder="Title of the task"
          placeholderTextColor="rgba(255, 255, 255, 0.87)"
          maxLength={50}
          value={count}
          onChangeText={(text) => setCount(text)}
        />
        <Text
          style={{
            color: 'white',
            paddingLeft: PixelRatio.getFontScale() * 300,
          }}>
          {count.length}/50
        </Text>
        <Text
          style={{
            paddingTop: PixelRatio.getFontScale() * 40,
            color: 'white',
            fontSize: PixelRatio.getFontScale() * 25,
          }}>
          Assign it to:{' '}
        </Text>
        <FlatList
          data={Team}
          keyExtractor={(team) => team.key.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: PixelRatio.getFontScale() * 20,
                }}>
                <Radiobutton />
                <Text
                  style={{
                    paddingLeft: PixelRatio.getFontScale() * 10,
                    color: 'white',
                    fontSize: PixelRatio.getFontScale() * 19,
                  }}>
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
    paddingLeft: PixelRatio.getFontScale() * 20,
    paddingRight: PixelRatio.getFontScale() * 20,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: PixelRatio.getFontScale() * 40,
  },
  heading: {
    paddingLeft: PixelRatio.getFontScale() * 65,
    color: textColor,
    paddingRight: PixelRatio.getFontScale() * 35,
    paddingTop: PixelRatio.getFontScale() * 40,
    fontSize: PixelRatio.getFontScale() * 30,
  },
  title: {
    color: 'white',
    paddingTop: PixelRatio.getFontScale() * 53,
    paddingLeft: PixelRatio.getFontScale() * 15,
    fontSize: PixelRatio.getFontScale() * 25,
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.35)',
    padding: PixelRatio.getFontScale() * 10,
    fontSize: PixelRatio.getFontScale() * 17,
    color: 'white',
  },
});

export default AssignTask;
