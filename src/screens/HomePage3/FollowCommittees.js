import React from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, textColor} from '../../Constants';
import axios from '../../controllers/axios';

export default class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
          return (
            <View style={styles.container}>
              <EventCard
                name={item.eventName}
                id={item.id}
                summary={item.eventSummary}
                likes={item.likes}
                committee={item.organisingCommitteeName}
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
