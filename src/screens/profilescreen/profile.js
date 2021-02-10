import React from 'react';
import {View,Text,SafeAreaView,StyleSheet, ScrollView,Image, StatusBar,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStats from '../components/profilestats';
const image=require('../images/profile.jpg');
const profile=()=>{
    return(

       <SafeAreaView style={styles.body}>
           <StatusBar backgroundColor="#0C233D"/>
          <ScrollView>
          <View style={{marginLeft:370}}>
              <Ionicons name="create-outline" size={40} style={{color:'#fff'}}/>
          </View>
          <View style={styles.profile}>
              <Image source={image} style={styles.propic}/>
              <Text style={styles.nametext}> John Smith</Text>
              <Text style={styles.emailtext}> johnsmith@svkmmumbai.onmicrosoft.com</Text>
              <Text style={styles.info}> blah blah blah blah blah blah blah blah blah</Text>

          </View>
          <View>
          <ProfileStats/>
          <ProfileStats/>
          </View>
         
          
        </ScrollView>


       </SafeAreaView>
    )
}
const styles= StyleSheet.create({

    body:{
        backgroundColor: '#1C2E4A',
        height: '100%',
    },
    nametext:{
        color:'#fff',
        textAlign:'center',
    
        fontSize:28,
        fontFamily:'roboto',
        fontWeight:'bold',


    },
    emailtext:{
        fontSize:18,
        color:'grey',
        textAlign:'center',
        fontFamily:'roboto',
        textDecorationLine:'underline',
    },
    info:{
        fontSize:18,
        color:'white',
        textAlign:'center',
        fontFamily:'roboto',



    },
    profile:{
       
        margin:10,
        alignItems:'center',
        
    },
    
    propic:{
       margin:20,
       height:120,
       width:120,
       borderRadius:200,
       alignContent:'center',
      
       
    },
    cardcontainer:{
        margin:30,
        height:140,
        borderRadius:20,
        backgroundColor:'#a9a9a9',
        flexDirection:'row',
    },
    button:{
        margin:10,
        height:40,
        width:80,
       
        
    }

    
})
export default profile;