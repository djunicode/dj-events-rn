/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const Radiobutton = () => {
  const [press, setPress] = useState(true);
  return (
    <View style={{paddingTop: 5}}>
      <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => {
          setPress(!press);
        }}>
        {press ? null : <View style={styles.selectedRb} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});

export default Radiobutton;
