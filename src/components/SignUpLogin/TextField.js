import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextField = (props) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={props.title}
      placeholderTextColor="rgba(255, 255, 255, 0.85)"
      textAlign="left"
    />
  );
};

const styles = StyleSheet.create({
  textinput: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: '#4e586e',
    height: 47,
    width: 315,
    borderRadius: 40,
    fontSize: 15,
    paddingLeft: 22,
    color: 'white',
  },
});

export default TextField;
