import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';

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
  }
  render() {
    return (
      <FlatList
        keyExtractor={(event) => event.name}
        data={Events}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <EventCard />
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
    backgroundColor: '#1c2e4a',
    paddingLeft: 23,
    paddingTop: 17,
  },
});
