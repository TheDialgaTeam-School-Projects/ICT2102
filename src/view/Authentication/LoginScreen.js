import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import LoginScreenController from '../../controller/Authentication/LoginScreen';
import GlobalCSS from '../../css/Global';
import LoadingModal from '../Component/LoadingModal';

const css = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default class LoginScreenView extends Component {
  constructor(props) {
    super(props);
    this.controller = new LoginScreenController(this);
  }

  async componentDidMount() {
    try {
      await this.controller.componentDidMount();
    } catch (e) {}
  }

  render() {
    return (
      <View style={css.form}>
        <View style={GlobalCSS.formRow}>
          <Text style={GlobalCSS.formLabel}>Email:</Text>
          <TextInput
            style={GlobalCSS.formInput}
            placeholder="Email..."
            autoCorrect={false}
            keyboardType="email-address"
            autoCompleteType="email"
            textContentType="emailAddress"
            onChangeText={this.controller.onChangeTextEmail}
            value={this.state.email}
            autoFocus={true}
          />
        </View>
        <View style={GlobalCSS.formRow}>
          <Text style={GlobalCSS.formLabel}>Password:</Text>
          <TextInput
            style={GlobalCSS.formInput}
            placeholder="Password..."
            autoCorrect={false}
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={this.controller.onChangeTextPassword}
            value={this.state.password}
          />
        </View>
        <View style={GlobalCSS.formRow}>
          <Button title="Login" onPress={this.controller.onPressLogin} />
        </View>
        <LoadingModal visible={this.state.isLoading} />
      </View>
    );
  }
}
