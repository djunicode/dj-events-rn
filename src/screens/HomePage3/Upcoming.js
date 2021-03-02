import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, textColor} from '../../Constants';
import axios from '../../controllers/axios';

const Events = [
  {eventName: 'Event 1'},
  {eventName: 'Event 2'},
  {eventName: 'Event 3'},
  {eventName: 'Event 4'},
  {eventName: 'Event 5'},
  {eventName: 'Event 6'},
];

export default class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Events,
      loading: true,
    };
  }

  componentDidMount() {
    this.getUpcoming();
  }

  async getUpcoming() {
    let res = await axios.get('/events');
    //console.log(res.data);
    this.setState({
      data: res.data,
      loading: false,
    });
  }
  render() {
    return this.state.loading ? (
      <ActivityIndicator
        style={styles.container}
        color={textColor}
        size={'large'}
      />
    ) : (
      <FlatList
        keyExtractor={(event, index) => index.toString()}
        data={this.state.data}
        renderItem={({item}) => {
          //console.log(item);
          return (
            <View style={styles.container}>
              <EventCard
                name={item.eventName}
                id={item.id}
                summary={item.eventSummary}
                likes={item.likes}
              />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingLeft: 23,
    paddingTop: 17,
  },
});
