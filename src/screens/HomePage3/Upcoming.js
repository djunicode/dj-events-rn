import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, textColor} from '../../Constants';
import axios from '../../controllers/axios';
import {heightToDp, widthToDp} from '../../Responsive';
import {PixelRatio} from 'react-native';

const Upcoming = ({d, type, liked}) => {
  useEffect(() => {
    //getUpcoming();
    console.log('This is ' + type + ' screen');
  }, []);

  return !d ? (
    <ActivityIndicator
      style={styles.container}
      color={textColor}
      size={'large'}
    />
  ) : (
    <View style={{backgroundColor: bgColor, flex: 1}}>
      <FlatList
        keyExtractor={(event, index) => index.toString()}
        data={d}
        renderItem={({item}) => {
          //console.log(liked.includes(item));
          const arr = liked.find(({id}) => id === item.id);
          const isliked = arr ? true : false;
          return (
            <View style={styles.container}>
              <EventCard
                name={item.eventName}
                id={item.id}
                summary={item.eventSummary}
                likes={item.likes}
                committee={item.organisingCommitteeName}
                description={item.eventDescription}
                isLiked={isliked}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
    padding: PixelRatio.getFontScale() * 10,
  },
});

export default Upcoming;
