/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Faccard from '../../components/CommitteeScreen/FaceCard';
import Profilecard from '../../components/CommitteeScreen/Profilecard';
import About from '../../components/CommitteeScreen/AboutComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  bgColor,
  statusbarColor,
  textColor,
  backDropColor,
  subtextColor,
} from '../../Constants';



const Members = [
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 0},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 1},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 2},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 3},
  {name: 'JOHN SMITH', position: 'CHAIRPERSON', key: 4},
];
const Committee = () => {
  const [notify, setNotify] = useState(false);
  const [data,setData]= useState([]);
  const faculty=[];
  const Events=[];
  const core=[];
  useEffect(()=>{
    fetch('http://aryan122.pythonanywhere.com/api/committee_detail/1/')
    .then(resp=>resp.json())
    .then(json=>setData(json))
    .catch(err=> console.log(err));

  },[]);

  //console.log(data.coreCommitteeMembers);
  for(let i=0;i< data.events.length;i++){
    Events.push({name: data.events[i].eventName,id:data.events[i].id,committee:data.committeeName});
  }
  for(let i=0;i<data.facultyMembers.length;i++){
    faculty.push({name:data.facultyMembers[i].name,id:data.facultyMembers[i].id,position:data.facultyMembers[i].positionAssigned});

  }
  for(let i=0;i<data.coreCommitteeMembers.length;i++){
    core.push({name:data.coreCommitteeMembers[i].student,id:data.coreCommitteeMembers[i].id,position:data.coreCommitteeMembers[i].positionAssigned});
  }
  console.log(core);


  return (
    <>
      <StatusBar backgroundColor={statusbarColor} />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              style={{color: subtextColor, marginHorizontal: 8}}
            />
            <Text style={styles.heading}>{data.committeeName}</Text>
            {notify ? (
              <MaterialCommunityIcons
                name="bell-ring"
                style={styles.icon}
                size={30}
                onPress={() => {
                  setNotify(false);
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name="bell"
                style={styles.icon}
                size={30}
                onPress={() => {
                  setNotify(true);
                }}
              />
            )}
          </View>
          <About about={data.committeeDescription} />
          <View>
            <View style={{margin: 3, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Events related to this committee
              </Text>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 2}}
              keyExtractor={(event) => event.id}
              data={Events}
              horizontal={true}
              renderItem={({item}) => {
                return <Faccard name={item.name} committee={item.committee} />;
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Faculty Members
              </Text>
              <TouchableOpacity style={[styles.dropdown, {marginLeft: 152}]}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: subtextColor}}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.id}
              data={faculty}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard name={item.name} position={item.position} />
                );
              }}
            />
            <View style={{margin: 10, flexDirection: 'row'}}>
              <Text style={{color: textColor, fontSize: 18}}>
                Core Committee Members
              </Text>
              <TouchableOpacity style={[styles.dropdown, {marginLeft: 80}]}>
                <Text
                  style={{
                    color: subtextColor,
                    fontWeight: 'bold',
                    paddingHorizontal: 8,
                  }}>
                  2020-21
                </Text>
                <FontAwesome
                  name="caret-down"
                  size={20}
                  style={{color: subtextColor}}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 5}}
              keyExtractor={(member) => member.id}
              data={core}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Profilecard name={item.name} position={item.position} />
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
    paddingTop: 35,
    paddingBottom: 20,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 30,
    color: subtextColor,
    marginHorizontal: 20,
    textDecorationLine: 'underline',
    fontFamily: 'Merriweather-Regular',
    textAlign: 'center',
    alignItems:'center',
  },
  text: {
    backgroundColor: backDropColor,
  },
  years: {
    borderRadius: 10,
    width: 70,
    height: 30,
    backgroundColor: backDropColor,
  },
  icon: {
    color: subtextColor,
    marginLeft: 370,
    marginVertical: 6,
    position:"absolute"
    
  },
  dropdown: {
    borderRadius: 10,
    width: 90,
    height: 30,
    backgroundColor: backDropColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Committee;
