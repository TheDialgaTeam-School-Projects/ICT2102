import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Button, Container, Content, Icon, Text, View} from 'native-base';
import {HeaderComponent} from '../../Component/Header';
import {ReminderComponent} from './ReminderComponent';
import {RemindersController} from '../../../controller/Patient/Reminders/Reminders';
import {GlobalCss} from '../../../css/GlobalCss';

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
    const reminders = this.state.patientModel
      ? this.state.patientModel.getPatientReminders()
      : [];

    return (
      <Container>
        <HeaderComponent headerTitle="Reminders" {...this.props} />
        <View padder />
        <Grid>
          <Row size={1}>
            <Col size={4} />
            <Col size={1} style={GlobalCss.mr1}>
              <Button
                rounded
                iconLeft
                style={GlobalCss.button}
                onPress={this.controller.onPressAddReminder}>
                <Icon type="FontAwesome5" name="bell" />
                <Text style={GlobalCss.buttonIconLabel}>Add reminder</Text>
              </Button>
            </Col>
          </Row>
          <Row size={10}>
            <Content>
              <Grid style={GlobalCss.alignItemsCenter}>
                <Col size={1} />
                <Col size={4} style={GlobalCss.alignItemsCenter}>
                  {reminders.map((value, index) => {
                    return (
                      <ReminderComponent
                        key={index}
                        index={index}
                        value={value}
                        onPressEdit={this.controller.onPressEditReminder}
                        onPressDelete={this.controller.onPressDeleteReminder}
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
