/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {bgColor, subtextColor, textColor, height} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';

const CoreViewTask = () => {
  const [data, setData] = useState([]);
  const [isBig, setIsBig] = useState(false);
  const {currentUser} = useContext(AuthContext);

  const onClick = () => {
    isBig ? setIsBig(false) : setIsBig(true);
  };

  const getCoreViewTaskData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Token ' + currentUser.Token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'http://aryan123456.pythonanywhere.com/api/coretasklist/' +
        currentUser.id +
        '/6/\n',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getCoreViewTaskData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <Text style={styles.heading}>VIEW TASK</Text>
      </View>
      <FlatList
        data={data}
        style={{paddingTop: 50, paddingLeft: 14}}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={onClick}
                style={{
                  padding: 15,
                  backgroundColor: '#505050',
                  width: '100%',
                  height: height * (isBig ? 0.5 : 0.25),
                  borderRadius: 20,
                }}>
                <Text style={styles.comphead}>Assigned by: </Text>
                <Text style={styles.content}>{item.assignedbyName}</Text>
                <Text style={styles.comphead}>Task: </Text>
                <View>
                  {isBig ? (
                    <Text
                      style={styles.content}
                      ellipsizeMode="tail"
                      numberOfLines={10}>
                      {item.task}
                    </Text>
                  ) : (
                    <Text
                      style={styles.content}
                      ellipsizeMode="tail"
                      numberOfLines={1}>
                      {item.task}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
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
  comphead: {
    color: textColor,
    fontSize: 26,
    textDecorationLine: 'underline',
  },
  content: {
    color: subtextColor,
    fontSize: 17,
  },
});

export default CoreViewTask;
