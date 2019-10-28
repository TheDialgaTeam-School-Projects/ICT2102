import React, {Component} from 'react';
import {Col, Grid} from 'react-native-easy-grid';
import {Container, Content, View} from 'native-base';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {ReminderComponent} from './ReminderComponent';
import {RemindersController} from '../../../controller/Patient/Reminders/Reminders';
import {GlobalCSS} from '../../../css/Global';

export class RemindersView extends Component {
  constructor(props) {
    super(props);
    this.controller = new RemindersController(this);
  }

  render() {
    let test = [];

    for (let i = 0; i < 10; i++) {
      test.push(i);
    }

    return (
      <Container>
        <CustomHeaderComponent headerTitle="REMINDERS" {...this.props} />
        <Content>
          <View padder />
          <Grid style={GlobalCSS.alignItemsCenter}>
            <Col size={1} />
            <Col size={4} style={GlobalCSS.alignItemsCenter}>
              {test.map((value, index) => {
                return (
                  <ReminderComponent
                    key={index}
                    text={'Reminder #' + value + ': Test @ 5 PM'}
                  />
                );
              })}
            </Col>
            <Col size={1} />
          </Grid>
          <View padder />
        </Content>
      </Container>
    );
  }
}
