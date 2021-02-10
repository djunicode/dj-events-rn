import React from 'react';
import {View,Text,SafeAreaView,StyleSheet, ScrollView,Image, StatusBar,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProfileStats=()=>{

    return(
        <View style={{  margin:30,
            height:140,
            borderRadius:20,
            backgroundColor:'#a9a9a9',
            flexDirection:'row',}}>
        <View style={{width:'30%',backgroundColor:'#505050',borderBottomLeftRadius:10,borderTopLeftRadius:10}}>

        </View>
        <View style={{width:'70%',backgroundColor:'#4E586E',borderBottomRightRadius:10,borderTopRightRadius:10}}>
    <View>        
<Text style={{ color:'#fff',
  textAlign:'center',
  fontSize:24, fontFamily:'roboto'}}> Creatives Mentee</Text>
<Text style={ {fontSize:18,
  color:'lightgrey',
  textAlign:'center',
  fontFamily:'roboto',}}> ACM CO-COMMITTEE</Text>
</View> 
<View style={{marginTop:20,flexDirection:'row',borderTopColor:'black',borderTopWidth:0.3}}>
   <TouchableOpacity style={{ margin:10,marginTop:20,
  height:26,
  width:80,}}>
   <LinearGradient
        colors={['#F54B64', '#F78361']} style={{borderRadius:5,height:26}}
        >
        <Text style={ {fontSize:14,
  color:'white',
  textAlign:'center',
  fontFamily:'roboto',fontWeight:'bold'}}>TASK</Text>
      </LinearGradient>
   </TouchableOpacity>
   <TouchableOpacity style={{ margin:10,marginTop:20,
  height:26,
  width:130,}}>
   <LinearGradient
        colors={['#F54B64', '#F78361']} style={{borderRadius:5,height:26}}
        >
        <Text style={{fontSize:14,
  color:'white',
  textAlign:'center',
  fontFamily:'roboto',fontWeight:'bold'}}>REFERAL COUNT</Text>
      </LinearGradient>
   </TouchableOpacity>
</View>
        </View>
    </View>
    )
}


// const styles= StyleSheet.create({

//     body:{
//         backgroundColor: '#1C2E4A',
//         height: '100%',
//     },
//     nametext:{
//         color:'#fff',
//         textAlign:'center',
//         fontSize:28,
//         fontFamily:'roboto',
//         fontWeight:'bold',


//     },
//     emailtext:{
//         fontSize:18,
//         color:'grey',
//         textAlign:'center',
//         fontFamily:'roboto',
//         textDecorationLine:'underline',
//     },
//     info:{
//         fontSize:18,
//         color:'white',
//         textAlign:'center',
//         fontFamily:'roboto',



//     },
//     profile:{
       
//         margin:10,
//         alignItems:'center',
        
//     },
    
//     propic:{
//        margin:20,
//        height:120,
//        width:120,
//        borderRadius:200,
//        alignContent:'center',
      
       
//     },
//     cardcontainer:{
      
//     },
//     button:{
//         margin:10,
//         height:40,
//         width:80,
       
        
//     }

    
// })
 export default ProfileStats;