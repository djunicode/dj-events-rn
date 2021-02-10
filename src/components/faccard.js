/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {height, width} from '../Constants';
const image= require('../images/events.jpg')

const Faccard= (props) => {
//   const [added, setAdded] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.imagecontent}>
           <View>
               <Image style={{height:70,width:200,borderRadius:5}}source={image}/>
             </View> 

        </View>
        <View style={styles.textcontent}>
            <Text style={{fontSize:12,color:'white'}}> DIGIHUNT</Text>
            <Text style={{fontSize:12,color:'grey'}}> ACM CO-COMMITTEE</Text>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:200,
        height:120,
        borderRadius:5,
        margin:10,
        backgroundColor:'#4E586E',
       

    },
  
  textcontent:{
      
     

  },
  
});
export default Faccard;
