import React, {useEffect, useState} from 'react';
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
import axios from '../../controllers/axios';

const Upcoming = ({d, type, liked, callBack}) => {
  const [data, setData] = useState(d);

  useEffect(() => {
    if (type === 'upcoming') {
      getUpcoming();
      console.log('Loaded');
    }

    console.log('This is ' + type + ' screen');
  }, []);

  const getUpcoming = async () => {
    try {
      const res = await axios.get('/sort_events_by_date');
      //console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.warn(e);
    }
  };

  return data === [] ? (
    <ActivityIndicator
      style={styles.container}
      color={textColor}
      size={'large'}
    />
  ) : (
    <View style={{backgroundColor: bgColor, flex: 1}}>
      <FlatList
        keyExtractor={(event, index) => index.toString()}
        data={data}
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
    padding: PixelRatio.getFontScale() * 15,
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
