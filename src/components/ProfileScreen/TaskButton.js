/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {linearColor, subtextColor, textColor} from '../../Constants';

const TaskButton = ({width, text, route}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingTop: 10,
        marginBottom: 20,
        height: 19,
        width: width,
        paddingLeft: 24,
        borderRadius: 2,
      }}
      onPress={() => navigation.navigate(route)}>
      <LinearGradient
        colors={[textColor, linearColor]}
        style={{height: 26, opacity: 0.9}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: subtextColor,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TaskButton;
