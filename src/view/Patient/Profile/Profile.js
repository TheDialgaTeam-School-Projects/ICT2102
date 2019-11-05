import firestore from '@react-native-firebase/firestore';
import React, {Component} from 'react';
import {Alert, Image} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';
import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  Title,
  View,
  Header,
} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {PatientController} from '../../../controller/Patient/Profile/Profile';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileView extends Component {
  constructor(props) {
    super(props);
    //this.controller = new MedicineController(this);
    this.state = {
        patientModel: null,
    };
    this.willFocus = this.willFocus.bind(this);
    this.willFocusEvent = this.props.navigation.addListener(
          'willFocus',
          this.willFocus,
        );
  }

  async willFocus() {
    this.setState({
      patientModel: await DeviceCacheManagement.getPatientModelFromCache(),
    });
  }

  render() {
    const name = this.state.patientModel ? this.state.patientModel.getPatientName() : '';
    const id = this.state.patientModel ? this.state.patientModel.getPatientId() : '';
    const emergencyContact = this.state.patientModel ? this.state.patientModel.getPatientEmergencyContact() : '';
    const address = this.state.patientModel ? this.state.patientModel.getPatientAddress() : [];
    const photo = this.state.patientModel ? this.state.patientModel.getPhoto() : '';
    console.log(photo);
    return (
      <Container>
        <HeaderComponent headerTitle="PROFILE" {...this.props} />
         <Grid>
           <Col style={{height: '100%',...GlobalCss.alignItemsCenter, ...GlobalCss.p2, ...GlobalCss.m2}}>
             <Row size={-1}>
               <Image
               style={{ height: 250, width: 250  }}
               source={{uri: 'data:image/png;base64,' + photo}}
               />
             </Row>
             <Row size={-1}>
               <Text style={{fontWeight: 'bold', fontSize: 32}}>Name: </Text>
               <Text style={{fontSize: 32}}>{name}</Text>
             </Row>
             <Row size={-1}>
               <Text style={{fontWeight: 'bold', fontSize: 32}}>Patient ID: </Text>
               <Text style={{fontSize: 32}}>{id}</Text>
             </Row>
             <Row size={-1}>
               <Text style={{fontWeight: 'bold', fontSize: 32}}>Emergency Contact: </Text>
               <Text style={{fontSize: 32}}>{emergencyContact}</Text>
             </Row>
             <Row size={-1}>
               <Text style={{fontWeight: 'bold', fontSize: 32, ...GlobalCss.alignItemsLeft}}>Address: </Text>
               <Text style={{fontSize: 32, ...GlobalCss.alignItemsRight}}>{address.join('\n')}</Text>
             </Row>
             <Row>
               <Col style={{...GlobalCss.alignItemsFlexEnd, ...GlobalCss.pr2}}>
                 <Button style= {{...GlobalCss.button}}
                   width={150}
                   onPress={() => Alert.alert(
                   'Confirm Remove Patient',
                   'Are you sure you want to remove patient?',
                    [
                     {
                       text: 'Cancel',
                     },
                     {text: 'OK', onPress: async () => {
                      await AsyncStorage.removeItem('patientInformation');
                      this.props.navigation.navigate('RegisterPatient');
                     }},
                    ],
                    {cancelable: false},
                   )}>
                   <Text>Remove</Text>
                 </Button>
               </Col>
               <Col style={{...GlobalCss.alignItemsFlexStart, ...GlobalCss.pl2}}>
                 <Button style= {{...GlobalCss.button}}
                 width={150}
                 onPress={() => {
                 Alert.alert(
                  'Confirm Change Patient',
                  'Are you sure you want to change patient?',
                   [,
                    {
                     text: 'Cancel',
                    },
                    {text: 'OK', onPress: () => this.props.navigation.navigate('RegisterPatient')},
                   ],
                   {cancelable: false},
                 );
                }}>
                <Text>Change</Text>
               </Button>
             </Col >
            </Row>
           </Col>
         </Grid>
      </Container>
    );
  }
}
