import React, {Component} from 'react';
import {Grid, Row} from 'react-native-easy-grid';
import {Button, Card, CardItem, Icon, Text, View} from 'native-base';
import {GlobalCSS} from '../../../css/Global';

export class ReminderComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text style={GlobalCSS.reminderText}>{this.props.text}</Text>
        </CardItem>
        <CardItem>
          <Grid>
            <Row style={GlobalCSS.justifyContentRight}>
              <Button transparent>
                <Icon type="FontAwesome5" name="pencil-alt" />
              </Button>
              <View padder />
              <Button transparent>
                <Icon type="FontAwesome5" name="trash-alt" />
              </Button>
            </Row>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}
