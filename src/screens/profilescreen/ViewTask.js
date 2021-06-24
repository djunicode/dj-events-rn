/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  bgColor,
  subtextColor,
  textColor,
  height,
  baseURL,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';
import {PixelRatio} from 'react-native';

const ViewTask = ({route}) => {
  const [data, setData] = useState([]);
  const [isBig, setIsBig] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const {currentUser} = useContext(AuthContext);
  const {tag, comID} = route.params;

  const onClick = () => {
    isBig ? setIsBig(false) : setIsBig(true);
  };

  const getViewTaskData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Token ' + currentUser.Token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `${baseURL}/${tag}tasklist/${currentUser.id}/${comID}/\n`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.Message) {
          setMsg(result.Message);
        } else {
          setData(result);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getViewTaskData();
    console.log('This is view task Screen with tag:- ' + tag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigation = useNavigation();
  return loading ? (
    <ActivityIndicator
      style={{flex: 1, backgroundColor: bgColor}}
      color={textColor}
      size={'large'}
    />
  ) : (
    <View style={styles.body}>
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
      {msg ? (
        <Text
          style={{
            color: subtextColor,
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {msg}
        </Text>
      ) : (
        <FlatList
          data={data}
          style={{
            paddingTop: PixelRatio.getFontScale() * 50,
            paddingLeft: PixelRatio.getFontScale() * 14,
          }}
          keyExtractor={(x, i) => i}
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
      )}
    </View>
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
    paddingLeft: PixelRatio.getFontScale() * 80,
    color: textColor,
    paddingRight: PixelRatio.getFontScale() * 85,
    paddingTop: PixelRatio.getFontScale() * 40,
    fontSize: PixelRatio.getFontScale() * 30,
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

export default ViewTask;
