import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity,Image,
} from 'react-native';
import Faccard from '../components/faccard';
import Profilecard from '../components/Profilecard';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const image = require('../images/events.jpg');

const committee=()=>{
    const navigation = useNavigation();
    return (
        <>
           <StatusBar backgroundColor="#0C233D"/>
          <SafeAreaView style={styles.body}>
           <ScrollView> 
          
              <View style={styles.header}>
                <Ionicons name="chevron-back-outline" size={40} style={{color:"#fff",marginHorizontal:8}}/>
                <Text style={styles.heading}>ACM COMMITTEE</Text>
                <Ionicons name="notifications" size={30} style={{color:"#fff",marginLeft:30, marginVertical:6}} onPress={()=> navigation.navigate('profile')}  />
                
              </View>
              <View>
    
                <Image source={image} style={styles.image}/>
              </View>
              <View>
                <View style={{margin:10,flexDirection:'row'}}>
                  <Text style={{color:'#F54B64',fontWeight:"bold",fontSize:16,fontFamily:'roboto'}}> EVENTS RELATED TO THIS COMMITTEE</Text>
                  <TouchableOpacity style={{borderRadius: 10,
        width:70,
        height:30,
        backgroundColor:'#4E586E',marginLeft:26}} > 
                     <Text style={{color:"#fff",fontWeight:"bold",paddingHorizontal:8}}>2020-21 </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{marginVertical:5}} horizontal={true}> 
                <Faccard />
                <Faccard />
                <Faccard />
    
                
              
                </ScrollView>
                <View style={{margin:10,flexDirection:'row'}}>
                  <Text style={{color:'#F54B64',fontWeight:"bold",fontSize:16,fontFamily:'roboto'}}> FACULTY MEMBERS</Text>
                  <TouchableOpacity style={{borderRadius: 10,
        width:70,
        height:30,
        backgroundColor:'#4E586E',marginLeft:170}}> 
                     <Text style={{color:"#fff",fontWeight:"bold",paddingHorizontal:8}}>2020-21 </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{marginVertical:5}} horizontal={true}> 
                <Profilecard/>
                <Profilecard/>
                <Profilecard/>
                
            
    
    
                
              
                </ScrollView>
                <View style={{margin:10,flexDirection:'row'}}>
                  <Text style={{color:'#F54B64',fontWeight:"bold",fontSize:16,fontFamily:'roboto'}}> CORE COMMITTEE MEMBERS</Text>
                  <TouchableOpacity style={{borderRadius: 10,
        width:70,
        height:30,
        backgroundColor:'#4E586E',marginLeft:100}}> 
                     <Text style={{color:"#fff",fontWeight:"bold",paddingHorizontal:8}}>2020-21 </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{marginVertical:5}} horizontal={true}> 
                <Profilecard/>
                <Profilecard/>
                <Profilecard/>
                
            
    
    
                
              
                </ScrollView>
    
    
    
              </View>
             
              
              
              </ScrollView>
          </SafeAreaView>
         
         
        </>
      );
}
const styles = StyleSheet.create({
    body: {
      backgroundColor: '#1C2E4A',
      height: '100%',
    },
    header:{
  
      flexDirection:'row',
    },
    heading:{
      fontSize:30,
      color:'white',
      marginHorizontal:20,
      textDecorationLine:'underline',
      fontFamily:'merriweather',
      textAlign:'center',
  
    },
    image:{
      width:'80%',
      height:140,
      borderRadius:10,
      margin:20,
    },
    text:{
      backgroundColor: '#4E586E',
     
  
    },
    years:{
      borderRadius: 10,
      width:70,
      height:30,
      backgroundColor:'#4E586E',
      
  
    }
    
    
  });
 export default committee;  