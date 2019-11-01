import firestore from '@react-native-firebase/firestore';
import React, {Component} from 'react';
import {Alert} from 'react-native';
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

    return (
      <Container>
        <HeaderComponent headerTitle="PROFILE" {...this.props} />
          <View style={{flex: 1}}>
            <Grid>
              <Col>
                </Col>
                <Row size={-1}>
                  <Col size={-1}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Name: </Text>
                  </Col>
                  <Col>
                    <Text style={{fontSize: 32}}>{name}</Text>
                  </Col>
                </Row>
                <Row size={-1}>
                  <Col size={-1}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Patient ID: </Text>
                  </Col>
                  <Col>
                    <Text style={{fontSize: 32}}>{id}</Text>
                  </Col>
                </Row>
                <Row size={-1}>
                  <Col size={-1}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Emergency Contact: </Text>
                  </Col>
                  <Col>
                    <Text style={{fontSize: 32}}>{emergencyContact}</Text>
                   </Col>
                </Row>
                <Row size={-1}>
                  <Col size={-1}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Address: </Text>
                  </Col>
                  <Col>
                    <Text style={{fontSize: 32}}>{address.join('\n')}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
              </Col>
                <Col>
                  <Button style= {{...GlobalCss.button}}
                    width={150}
                    onPress={() => Alert.alert(
                     'Confirm Remove Patient',
                     'Are you sure you want to remove patient?',
                     [
                       {
                         text: 'Cancel',
                         style: 'cancel',
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
                <Col>
                  <Button style= {{...GlobalCss.button}}
                  width={150}
                  onPress={() => {
                  Alert.alert(
                    'Confirm Change Patient',
                    'Are you sure you want to change patient?',
                    [,
                      {
                        text: 'Cancel',
                        style: 'cancel',
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
            </Grid>
          </View>
      </Container>
    );
  }
}
