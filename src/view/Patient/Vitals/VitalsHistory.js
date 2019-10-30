import React, {Component} from 'react';
import DatePicker from 'react-native-date-picker';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import {GlobalCSS} from '../../../css/Global';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {VitalsController} from '../../../controller/Patient/Vitals/Vitals';

export class VitalsHistory extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsController(this);
  }
  render() {
    return (
        <Container>
            <CustomHeaderComponent headerTitle="VITALS HISTORY" {...this.props} />
            <Text>TEST</Text>
        </Container>
    )};
}
