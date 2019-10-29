import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
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
} from 'native-base';
import {GlobalCSS} from '../../../css/Global';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {VitalsController} from '../../../controller/Patient/Vitals/Vitals';

export class VitalsView extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsController(this);
  }

  render() {
    return (
      <Container>
        <CustomHeaderComponent headerTitle="VITALS" {...this.props} />
      </Container>
    );
  }
}