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
import {HeaderComponent} from '../../Component/Header';
import {LoadingModalComponent} from '../../Component/LoadingModal';
import {RemindersActionController} from '../../../controller/Patient/Reminders/RemindersAction';
import {GlobalCss} from '../../../css/GlobalCss';

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
    let headerText;

    if (this.state.action === 'add') {
      headerText = 'Add';
    } else if (this.state.action === 'edit') {
      headerText = 'Edit';
    }

    return (
      <Container>
        <HeaderComponent
          headerTitle={`${headerText} Reminders`}
          {...this.props}
        />
        <Form>
          <Item inlineLabel>
            <Label style={GlobalCss.formLabel}>Description:</Label>
            <Input
              style={GlobalCss.formInput}
              placeholder="Enter Description..."
              onChangeText={this.controller.onChangeTextDescription}
              autoFocus={true}
              value={this.state.description}
            />
          </Item>
          <Item inlineLabel>
            <Label style={GlobalCss.formLabel}>Date / Time:</Label>
            <DatePicker
              date={this.state.dateTime}
              minimumDate={new Date()}
              mode="datetime"
              timeZoneOffsetInMinutes={8 * 60}
              onDateChange={this.controller.onDateChange}
            />
          </Item>
          <View padder />
          <Grid>
            <Row>
              <Col size={1} />
              <Col size={1}>
                <Button
                  style={GlobalCss.button}
                  onPress={this.controller.onPressBackButton}>
                  <Text style={GlobalCss.buttonLabel}>Back</Text>
                </Button>
              </Col>
              <Col size={1} />
              <Col size={1}>
                <Button
                  style={GlobalCss.button}
                  onPress={this.controller.onPressSubmitButton}>
                  <Text style={GlobalCss.buttonLabel}>Submit</Text>
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
