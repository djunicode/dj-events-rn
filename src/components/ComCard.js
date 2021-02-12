/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {height, width} from '../Constants';
import * as Animatable from 'react-native-animatable';

const ComCard = ({name, followers, image, time}) => {
  const [added, setAdded] = useState(false);

  return (
    <Animatable.View
      animation="bounceInUp"
      duration={2000}
      delay={1000}
      style={{width: '50%', paddingTop: 20, paddingLeft: 6, paddingRight: 6}}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.info}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.followers}>{followers} followers</Text>
          </View>
          <LinearGradient
            colors={['#F54B64', '#F78361']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            locations={[0.29, 1.0]}
            style={styles.addButton}>
            <View
              style={{
                height: 28,
                width: 28,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name={added ? 'check' : 'plus'}
                style={styles.addIcon}
                onPress={() => {
                  if (!added) {
                    setAdded(true);
                  }
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  image: {
    //width: '47%',
    height: (width * 42) / 100,
    borderRadius: 5,
  },
  info: {
    backgroundColor: '#4E586E',
    height: (height * 9.4) / 100,
    //width: '47%',
    borderRadius: 5,
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginLeft: 7,
    marginTop: 14,
    color: 'white',
  },
  followers: {
    fontFamily: 'Oxygen',
    fontSize: 14,
    marginLeft: 7,
    marginTop: 1,
    color: '#2E2E2E',
    fontWeight: '400',
  },
  addButton: {
    height: 28,
    width: 28,
    borderRadius: 50,
    marginLeft: 23,
    marginTop: 23,
  },
  addIcon: {
    color: 'white',
    fontSize: 18,
  },
});
export default ComCard;
