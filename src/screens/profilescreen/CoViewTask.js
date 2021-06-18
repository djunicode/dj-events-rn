/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {bgColor, subtextColor, textColor, height} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../Authentication/AuthProvider';
import {PixelRatio} from 'react-native';
import {heightToDp, widthToDp} from '../../Responsive';

const CoViewTask = () => {
  const {currentUser} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isBig, setIsBig] = useState(false);
  const onClick = () => {
    isBig ? setIsBig(false) : setIsBig(true);
  };

  const getCoViewTaskData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Token ' + currentUser.Token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'http://aryan123456.pythonanywhere.com/api/cotasklist/' +
        currentUser.id +
        '/5/\n',
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
    getCoViewTaskData();
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
        <Text style={styles.heading}>TASK</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'rgba(255,255,255,0.25)',
          borderBottomWidth: 1,
          paddingTop: PixelRatio.getFontScale() * 24,
        }}
      />
      <FlatList
        data={data}
        style={{
          paddingTop: PixelRatio.getFontScale() * 50,
          paddingLeft: PixelRatio.getFontScale() * 14,
        }}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={onClick}
                style={{
                  padding: PixelRatio.getFontScale() * 15,
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
    paddingLeft: PixelRatio.getFontScale() * 30,
    paddingRight: PixelRatio.getFontScale() * 30,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: PixelRatio.getFontScale() * 40,
  },
  heading: {
    paddingLeft: PixelRatio.getFontScale() * 100,
    color: textColor,
    paddingRight: PixelRatio.getFontScale() * 85,
    paddingTop: PixelRatio.getFontScale() * 40,
    fontSize: PixelRatio.getFontScale() * 30,
  },
  heading1: {
    color: textColor,
    paddingLeft: PixelRatio.getFontScale() * 19,
    paddingTop: PixelRatio.getFontScale() * 9,
    fontSize: PixelRatio.getFontScale() * 20,
  },
  comphead: {
    color: textColor,
    fontSize: PixelRatio.getFontScale() * 26,
    textDecorationLine: 'underline',
  },
  content: {
    color: subtextColor,
    fontSize: PixelRatio.getFontScale() * 17,
  },
});

export default CoViewTask;
