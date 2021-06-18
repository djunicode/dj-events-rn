import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, subtextColor, textColor} from '../../Constants';
import {PixelRatio} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Upcoming = ({d, type, liked, callBack}) => {
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
      {type === 'searchEvent' ? (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => callBack(null)}>
          <Entypo name="cross" size={40} color={subtextColor} />
        </TouchableOpacity>
      ) : null}
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
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    height: 60,
    backgroundColor: textColor,
    borderRadius: 30,
  },
});

export default Upcoming;
