import React, {Component} from 'react';
import {Button, Container, Text, View} from 'native-base';
import {PatientInformationController} from '../../controller/Main/PatientInformation';
import {GlobalCss} from '../../css/GlobalCss';

export class PatientInformationView extends Component {
  constructor(props) {
    super(props);
    this.controller = new PatientInformationController(this);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
  }

  async componentDidMount() {
    await this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  render() {
    const patientConditions = this.state.patientModel ? (
      <Text style={GlobalCss.patientConditionsText}>
        {this.state.patientModel.getPatientConditions().join('\n')}
      </Text>
    ) : null;

    return (
      <Container style={GlobalCss.patientInformationContainer}>
        <Text style={GlobalCss.patientNameText}>
          {this.state.patientModel
            ? this.state.patientModel.getPatientName()
            : 'No Patient'}
        </Text>
        {patientConditions}
        <View padder />
        <Button
          style={GlobalCss.button}
          onPress={this.controller.onPressLoginButton}>
          <Text style={GlobalCss.buttonLabel}>Login</Text>
        </Button>
      </Container>
    );
  }
}
