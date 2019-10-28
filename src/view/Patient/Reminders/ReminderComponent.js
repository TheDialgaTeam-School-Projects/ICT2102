import React, {Component} from 'react';
import {Grid, Row} from 'react-native-easy-grid';
import {Button, Card, CardItem, Icon, Text, View} from 'native-base';
import {GlobalCSS} from '../../../css/Global';
import {ReminderComponentController} from '../../../controller/Patient/Reminders/ReminderComponent';

export class ReminderComponent extends Component {
  constructor(props) {
    super(props);
    this.controller = new ReminderComponentController(this);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Text style={GlobalCSS.reminderComponentHeaderText}>
            {`Reminder #${this.props.index + 1}:`}
          </Text>
        </CardItem>
        <CardItem>
          <Text style={GlobalCSS.reminderComponentText}>
            {this.props.value.message}
          </Text>
        </CardItem>
        <CardItem>
          <Text style={GlobalCSS.reminderComponentText}>
            {`@ ${new Date(this.props.value.dateTime * 1000).toLocaleString(
              'en-SG',
            )}`}
          </Text>
        </CardItem>
        <CardItem>
          <Grid>
            <Row style={GlobalCSS.justifyContentRight}>
              <Button transparent onPress={this.controller.onPressEditButton}>
                <Icon type="FontAwesome5" name="pencil-alt" />
              </Button>
              <View padder />
              <Button transparent onPress={this.controller.onPressDeleteButton}>
                <Icon type="FontAwesome5" name="trash-alt" />
              </Button>
            </Row>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}
