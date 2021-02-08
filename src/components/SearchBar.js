/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = (props) => {
  return (
    <View style={styles.sectionStyle}>
      <Icon
        name="search"
        style={styles.icon}
        size={30}
        color={'rgba(255, 255, 255, 0.54)'}
      />
      <TextInput
        placeholder={props.title}
        placeholderTextColor="rgba(255, 255, 255, 0.54)"
        style={{flex: 1, fontSize: 16, paddingLeft: 17}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 19,
    paddingTop: 9,
    paddingBottom: 9,
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#4e586e',
    borderRadius: 100,
    width: '85%',
    height: 46,
  },
});

export default SearchBar;
