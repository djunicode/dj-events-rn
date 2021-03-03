import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor} from '../../Constants';
import axios from '../../controllers/axios';

const Events = [
  {name: 'Event 1'},
  {name: 'Event 2'},
  {name: 'Event 3'},
  {name: 'Event 4'},
  {name: 'Event 5'},
  {name: 'Event 6'},
];

export default class Latest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Events,
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
    });
  }

  render() {
    return (
      <FlatList
        keyExtractor={(event, index) => index.toString()}
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <EventCard
                name={item.eventName}
                id={item.id}
                summary={item.eventSummary}
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
