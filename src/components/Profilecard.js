/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const image = require('../images/profile.jpg');

const Profilecard = (props) => {
  //   const [added, setAdded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imagecontent}>
        <View>
          <Image
            style={{height: 110, borderRadius: 5, width: 130}}
            source={image}
          />
        </View>
      </View>
      <View style={styles.textcontent}>
        <Text style={{fontSize: 12, color: 'white'}}> JOHN SMITH</Text>
        <Text style={{fontSize: 12, color: 'rgba(255,255,255,0.54)'}}>
          {' '}
          CHAIRPERSON
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 150,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: '#4E586E',
  },
});
export default Profilecard;
