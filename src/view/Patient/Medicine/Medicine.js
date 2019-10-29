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
import {MedicineController} from '../../../controller/Patient/Medicine/Medicine';

export class MedicineView extends Component {
  constructor(props) {
    super(props);
    this.controller = new MedicineController(this);
  }

  render() {
    return (
      <Container>
        <CustomHeaderComponent headerTitle="MEDICINE" {...this.props} />
      </Container>
    );
  }
}
