import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, textColor} from '../../Constants';
import axios from '../../controllers/axios';
import {heightToDp, widthToDp} from '../../Responsive';
import {PixelRatio} from 'react-native';
const Following = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUpcoming = async () => {
    let res = await axios.get('/events');
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUpcoming();
  }, []);

  return loading ? (
    <ActivityIndicator
      style={styles.container}
      color={textColor}
      size={'large'}
    />
  ) : (
    <FlatList
      keyExtractor={(event, index) => index.toString()}
      data={data}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <EventCard
              name={item.eventName}
              id={item.id}
              summary={item.eventSummary}
              likes={item.likes}
              committee={item.organisingCommitteeName}
              description={item.eventDescription}
            />
          </View>
        );
      }}
    />
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

export default Following;
