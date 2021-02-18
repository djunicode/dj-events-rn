import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {backDropColor, subtextColor} from '../../Constants';

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
    backgroundColor: backDropColor,
    height: 47,
    width: 315,
    borderRadius: 40,
    fontSize: 15,
    paddingLeft: 22,
    color: subtextColor,
  },
});

export default TextField;
