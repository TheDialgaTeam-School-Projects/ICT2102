import React, {Component} from 'react';
import {Grid, Row} from 'react-native-easy-grid';
import {Button, Card, CardItem, Icon, Text, View} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';

export class ReminderComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text style={GlobalCss.reminderComponentHeaderText}>
            {`Reminder #${this.props.index + 1}:`}
          </Text>
        </CardItem>
        <CardItem>
          <Text style={GlobalCss.reminderComponentText}>
            {this.props.value.description}
          </Text>
        </CardItem>
        <CardItem>
          <Text style={GlobalCss.reminderComponentText}>
            {`@ ${new Date(this.props.value.dateTime * 1000).toLocaleString(
              'en',
              {timeZone: 'Asia/Singapore'},
            )}`}
          </Text>
        </CardItem>
        <CardItem>
          <Grid>
            <Row style={GlobalCss.justifyContentFlexEnd}>
              <Button
                transparent
                onPress={() => this.props.onPressEdit(this.props.index)}>
                <Icon type="FontAwesome5" name="pencil-alt" />
              </Button>
              <View padder />
              <Button
                transparent
                onPress={() => this.props.onPressDelete(this.props.index)}>
                <Icon type="FontAwesome5" name="trash-alt" />
              </Button>
            </Row>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}
