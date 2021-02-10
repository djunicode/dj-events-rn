/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const image = require('../images/events.jpg');

const Faccard = (props) => {
  //   const [added, setAdded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imagecontent}>
        <View>
          <Image
            style={{height: 100, width: 200, borderRadius: 5}}
            source={image}
          />
        </View>
      </View>
      <View style={styles.textcontent}>
        <Text style={{fontSize: 12, color: 'white', paddingTop: 5}}>
          {' '}
          DIGIHUNT
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.54)',
            paddingTop: 5,
          }}>
          {' '}
          ACM CO-COMMITTEE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#4E586E',
  },
});
export default Faccard;
