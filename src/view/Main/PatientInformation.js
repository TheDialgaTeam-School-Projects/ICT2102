import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Text, View} from 'native-base';
import {PatientInformationController} from '../../controller/Main/PatientInformation';
import {GlobalCSS} from '../../css/Global';

export class PatientInformationView extends Component {
  constructor(props) {
    super(props);
    this.controller = new PatientInformationController(this);
  }

  render() {
    const css = StyleSheet.create({
      patientInformationView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      patientLabel: {
        fontSize: 48,
      },
    });

    return (
      <Container>
        <View style={css.patientInformationView}>
          <Text style={css.patientLabel}>No Patient</Text>
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
