import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Text, View} from 'native-base';
import {PatientInformationController} from '../../controller/Main/PatientInformation';
import {GlobalCSS} from '../../css/Global';

export class PatientInformationView extends Component {
  constructor(props) {
    super(props);
    this.controller = new PatientInformationController(this);
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
    const css = StyleSheet.create({
      patientInformationView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

    const patientConditions = this.state.patient ? (
      <Text style={GlobalCSS.patientConditionsText}>
        {this.state.patient.patientConditions.join('\n')}
      </Text>
    ) : null;

    return (
      <Container>
        <View style={css.patientInformationView}>
          <Text style={GlobalCSS.patientNameText}>
            {this.state.patient ? this.state.patient.patientName : 'No Patient'}
          </Text>
          {patientConditions}
          <View padder />
          <Button
            style={GlobalCSS.button}
            onPress={this.controller.onPressLoginButton}>
            <Text style={GlobalCSS.buttonLabel}>Login</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
