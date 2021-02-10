/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {height, width} from '../Constants';
const image= require('../images/profile.jpg')

const Profilecard= (props) => {
//   const [added, setAdded] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.imagecontent}>
           <View>
               <Image style={{height:70,borderRadius:5,width:120}}source={image}/>
             </View> 

        </View>
        <View style={styles.textcontent}>
            <Text style={{fontSize:12,color:'white'}}> JOHN SMITH</Text>
            <Text style={{fontSize:12,color:'grey'}}> CHAIRPERSON</Text>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:120,
        height:120,
        borderRadius:5,
        marginHorizontal:10,
        backgroundColor:'#4E586E',
       

    },
  
  textcontent:{
      
     

  },
  
});
export default Profilecard;
