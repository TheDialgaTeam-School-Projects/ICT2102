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
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {AddRemindersController} from '../../../controller/Patient/Reminders/AddReminders';

export class AddRemindersView extends Component {
  constructor(props) {
    super(props);
    this.controller = new AddRemindersController(this);
  }

  render() {
    return (
      <Container>
        <CustomHeaderComponent headerTitle="ADD REMINDERS" {...this.props} />
      </Container>
    );
  }
}
