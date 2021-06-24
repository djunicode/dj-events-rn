/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext,useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PixelRatio} from 'react-native';
import {
  baseURL,
  bgColor,
  linearColor,
  subtextColor,
  textColor,
} from '../../Constants';
import {heightToDp} from '../../Responsive';
import {AuthContext} from '../../Authentication/AuthProvider';

const AssignTask = ({route}) => {
  const navigation = useNavigation();
  const [tdata, setTdata] = useState('');
  const [person, setPerson] = useState('');
  const [selected,setSelected]=useState('');
  const {currentUser} = useContext(AuthContext);
  const [Teams,setTeams]=useState([]);

  const countryList = () =>{
    return( Teams.map( (x,i) => { 
          return( <Picker.Item label={x} key={i} value={x}  />)} ));
  }

  useEffect(() => {
    getCoCom();
  }, [])

  const getCoCom=()=>{
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Token "+currentUser.Token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${baseURL}/get_co_committee_members/${route.params.comID}/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const list=[];
        for(var i=0;i<result.length;i++){
          list.push(<Picker.Item label={result[i].student} key={result[i].id} value={result[i].student}  />);
        }
        setTeams(list);
      })
      .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }

  const assign = ({member,task}) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Token ' + currentUser.Token);
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        coCommittee: member,
        task: task,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseURL}/coretaskcreate/${currentUser.id}/${route.params.comID}/`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) =>{
          if (result.message === 'Requested Core Committee/ Co Committee member not found') {
            console.log(result);
            Alert.alert('Assignment Failed', 'Co Committee member not found', [
              {text: 'OK', onPress: () => console.log('okay')},
            ]);
          } else {
            console.log(result);
          }
        })
        .catch((error) => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.heading}>ASSIGN TASK</Text>
      </View>
      <Text style={styles.title}>Task to be completed: </Text>
      <View
        style={{
          paddingLeft: PixelRatio.getFontScale() * 20,
          paddingTop: PixelRatio.getFontScale() * 10,
        }}>
        <TextInput
          style={styles.textinput}
          placeholder="Title of the task"
          placeholderTextColor="rgba(255, 255, 255, 0.87)"
          maxLength={100}
          value={tdata}
          onChangeText={(text) => setTdata(text)}
        />
        <Text
          style={{
            color: 'white',
            paddingLeft: PixelRatio.getFontScale() * 260,
          }}>
          {tdata.length}/100
        </Text>
        <Text
          style={{
            paddingTop: PixelRatio.getFontScale() * 25,
            color: 'white',
            fontSize: PixelRatio.getFontScale() * 25,
          }}>
          Assign it to:{' '}
        </Text>
        <View style={{height: 10}} />
        <View style={styles.textinput}>
        <Picker
        style={{color:'white'}}
          itemStyle={{backgroundColor:'white',placeholderTextColor: '#fff'}}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) =>
          setSelected(itemValue)
          }>
          {Teams}
        </Picker>
        </View>
        <View style={{height: 30}} />
        <View style={{paddingTop: PixelRatio.getFontScale() * 25}}>
          <TouchableOpacity onPress={() => {
            console.log(person);
            console.log(tdata);
            assign(person,tdata);
          }}>
            <LinearGradient
              colors={[textColor, linearColor]}
              style={styles.button}>
              <Text style={styles.text}>ASSIGN TASK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgColor,
    height: '100%',
    paddingLeft: PixelRatio.getFontScale() * 20,
    paddingRight: PixelRatio.getFontScale() * 20,
  },
  backIcon: {
    color: subtextColor,
    paddingTop: PixelRatio.getFontScale() * 40,
  },
  heading: {
    paddingLeft: PixelRatio.getFontScale() * 65,
    color: textColor,
    paddingRight: PixelRatio.getFontScale() * 35,
    paddingTop: PixelRatio.getFontScale() * 40,
    fontSize: PixelRatio.getFontScale() * 30,
  },
  title: {
    color: 'white',
    paddingTop: PixelRatio.getFontScale() * 53,
    paddingLeft: PixelRatio.getFontScale() * 15,
    fontSize: PixelRatio.getFontScale() * 25,
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.35)',
    fontSize: PixelRatio.getFontScale() * 17,
    color: 'white',
  },
  button: {
    height: heightToDp('8%'),
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    paddingTop: PixelRatio.getFontScale() * 15,
    color: subtextColor,
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
});

export default AssignTask;
