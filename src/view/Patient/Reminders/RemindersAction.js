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
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {LoadingModalComponent} from '../../Component/LoadingModal';
import {RemindersActionController} from '../../../controller/Patient/Reminders/RemindersAction';
import {GlobalCSS} from '../../../css/Global';

export class RemindersActionView extends Component {
  constructor(props) {
    super(props);
    this.controller = new RemindersActionController(this);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  render() {
    let headerText = '';

    if (this.state.action === 'add') {
      headerText = 'ADD';
    } else if (this.state.action === 'edit') {
      headerText = 'EDIT';
    }

    return (
      <Container>
        <CustomHeaderComponent
          headerTitle={`${headerText} REMINDERS`}
          {...this.props}
        />
        <Form>
          <Item inlineLabel>
            <Label style={GlobalCSS.formLabel}>Description:</Label>
            <Input
              style={GlobalCSS.formInput}
              placeholder="Enter Description..."
              onChangeText={() => {}}
              autoFocus={true}
            />
          </Item>
          <Item inlineLabel>
            <Label style={GlobalCSS.formLabel}>Date / Time:</Label>
            <DatePicker
              date={new Date()}
              minimumDate={new Date()}
              mode="date"
              onDateChange={() => {}}
            />
            <DatePicker date={new Date()} mode="time" onDateChange={() => {}} />
          </Item>
          <View padder />
          <Grid>
            <Row>
              <Col size={1} />
              <Col size={1}>
                <Button
                  style={GlobalCSS.button}
                  onPress={this.controller.onPressBackButton}>
                  <Text style={GlobalCSS.buttonLabel}>Back</Text>
                </Button>
              </Col>
              <Col size={1} />
              <Col size={1}>
                <Button style={GlobalCSS.button} onPress={() => {}}>
                  <Text style={GlobalCSS.buttonLabel}>Submit</Text>
                </Button>
              </Col>
              <Col size={1} />
            </Row>
          </Grid>
        </Form>
        <LoadingModalComponent visible={this.state.isLoading} />
      </Container>
    );
  }
}
