import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Text} from 'native-base';
import {GlobalCSS} from '../../css/Global';
import {PatientInformationController} from '../../controller/Main/PatientInformation';

const css = StyleSheet.create({
  patientInformation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patientLabel: {
    fontSize: 48,
  },
  loginButton: {
    ...GlobalCSS.button,
    width: 250,
  },
});

export class PatientInformationView extends Component {
  constructor(props) {
    super(props);
    this.controller = new PatientInformationController(this);
  }

  render() {
    return (
      <Container>
        <View style={css.patientInformation}>
          <Text style={css.patientLabel}>No Patient</Text>
          <View style={GlobalCSS.Separator} />
          <Button
            style={css.loginButton}
            onPress={this.controller.onPressLoginButton}>
            <Text style={GlobalCSS.buttonLabel}>Login</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
