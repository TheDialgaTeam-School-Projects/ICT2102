import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Button, Container, Content, Icon, Text, View} from 'native-base';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {ReminderComponent} from './ReminderComponent';
import {RemindersController} from '../../../controller/Patient/Reminders/Reminders';
import {GlobalCSS} from '../../../css/Global';

export class RemindersView extends Component {
  constructor(props) {
    super(props);
    this.controller = new RemindersController(this);
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
    const reminders = this.state.patient
      ? this.state.patient.patientReminders
      : [];

    return (
      <Container>
        <CustomHeaderComponent headerTitle="REMINDERS" {...this.props} />
        <View padder />
        <Grid>
          <Row size={1}>
            <Col size={4} />
            <Col size={1} style={GlobalCSS.mr1}>
              <Button
                rounded
                iconLeft
                style={GlobalCSS.button}
                onPress={this.controller.onPressAddReminder}>
                <Icon type="FontAwesome5" name="bell" />
                <Text style={GlobalCSS.buttonIconLabel}>Add reminder</Text>
              </Button>
            </Col>
          </Row>
          <Row size={10}>
            <Content>
              <Grid style={GlobalCSS.alignItemsCenter}>
                <Col size={1} />
                <Col size={4} style={GlobalCSS.alignItemsCenter}>
                  {reminders.map((value, index) => {
                    return (
                      <ReminderComponent
                        key={index}
                        index={index}
                        value={value}
                        {...this.props}
                      />
                    );
                  })}
                </Col>
                <Col size={1} />
              </Grid>
              <View padder />
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}
