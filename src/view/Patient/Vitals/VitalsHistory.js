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
import {VitalsHistoryController} from '../../../controller/Patient/Vitals/VitalsHistory';

export class VitalsHistoryView extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsHistoryController(this);
  }
  render() {
    return (
        <Container>
            <CustomHeaderComponent headerTitle="VITALS HISTORY" {...this.props} />
            <Grid>
              <Col style={{ height: '100%'}, GlobalCSS.alignItemsCenter}>
                <Text>TEMPERATURE GRAPH HERE</Text>
              </Col>
              <Col style={{ height: '100%'}, GlobalCSS.alignItemsCenter}>
                <Text>BLOOD PRESSURE GRAPH HERE</Text>
                <Button
                  regular
                  iconLeft
                  style={GlobalCSS.button}
                  onPress={this.controller.onPressBackButton}>
                  <Text style={GlobalCSS.buttonLabel}>Back</Text>
                </Button>
              </Col>
            </Grid>
        </Container>
    )};
}
