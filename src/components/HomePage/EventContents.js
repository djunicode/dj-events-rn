/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Linking, Platform} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const ContactInfo = ({name, number}) => {
  return (
    <View style={styles.contact}>
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons name="account" style={styles.icon} />
        <Text style={(styles.paragraph, {color: 'white', marginLeft: 15.33})}>
          {name}
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', position: 'absolute', marginLeft: 158}}>
        <MaterialIcons name="call" style={styles.icon} />
        <Text
          style={
            (styles.paragraph,
            {color: 'white', marginLeft: 7, textDecorationLine: 'underline'})
          }
          onPress={() => {
            let num = '';
            if (Platform.OS === 'ios') {
              num = `telprompt:${'+91'}${number}`;
            } else if (Platform.OS === 'android') {
              num = `tel:${'+91'}${number}`;
            }
            Linking.openURL(num);
          }}>
          {number}
        </Text>
      </View>
    </View>
  );
};
const About = () => {
  const {aboutInfo, setAboutInfo} = useState();
  return (
    <View style={{flex: 1, backgroundColor: '#1C2E4A'}}>
      <Animatable.View animation="fadeInLeftBig" duration={2000} delay={1500}>
        <Title style={styles.question}>What is this event about?</Title>
        <Paragraph
          style={
            (styles.paragraph,
            {
              paddingLeft: 13,
              borderLeftColor: 'white',
              borderLeftWidth: 1,
              marginLeft: 31,
              color: 'white',
            })
          }>
          jbdjfhedujef jkhuidehfjk hjgeyurghjag hgwhdbnkhyiubd nbhjgdejbm
          xhbsdbfdj asgdgjsbdmn hgshd sn
        </Paragraph>
      </Animatable.View>
    </View>
  );
};

const Gallery = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1C2E4A'}}>
      <Title style={styles.question}>Have a look at pictures of Digihunt</Title>
      <View style={{alignSelf: 'center'}}>
        <View style={{marginTop: 14, flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{height: 112, width: 132}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
              }}
            />
            <Image
              style={{height: 64, width: 132, marginTop: 6}}
              source={{
                uri:
                  'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
              }}
            />
          </View>
          <Image
            style={{height: 182, width: 139, marginLeft: 8}}
            source={{
              uri:
                'http://www.fedracongressi.com/fedra/wp-content/uploads/2016/02/revelry-event-designers-homepage-slideshow-38.jpeg',
            }}
          />
        </View>
        <Image
          style={{height: 81, width: 278, marginTop: 8}}
          source={{
            uri: 'https://www.countrywidevents.in/images/slide3.jpg',
          }}
        />
      </View>
    </View>
  );
};

const Register = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1C2E4A'}}>
      <Title style={styles.question}>Interested? Register Now!</Title>
      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://www.canva.com/design/DAEUBYdJGJM/share/preview?token=x_QNKdTxXn_alHy-Igl',
          )
        }
        style={
          (styles.paragraph,
          {
            marginLeft: 40,
            marginRight: 40,
            marginTop: 12,
            color: 'white',
            textDecorationLine: 'underline',
          })
        }>
        https://www.canva.com/design/DAEUBYdJGJM/share/preview?token=x_QNKdTxXn_alHy-Igl
      </Paragraph>
    </View>
  );
};

const Contact = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1C2E4A'}}>
      <Title style={styles.question}>Facing a problem? Contact us</Title>
      <ContactInfo name="Shourya" number="1234567890" />
      <ContactInfo name="Vansh" number="9876543210" />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  question: {
    color: '#F54B64',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    marginLeft: 40,
  },
  paragraph: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  contact: {
    marginTop: 17.33,
    marginLeft: 43,
    flexDirection: 'row',
    margin: 2,
  },
  icon: {
    fontSize: 15,
    color: 'white',
  },
});

export {About, Contact, Register, Gallery};
