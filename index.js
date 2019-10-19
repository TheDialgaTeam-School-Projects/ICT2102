import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreenView from './src/view/Authentication/LoginScreen';

const routes = createSwitchNavigator({
  Authentication: createStackNavigator({
    Login: {
      screen: LoginScreenView,
      navigationOptions: () => ({
        title: 'Welcome to Dashboard',
      }),
    },
  }),
});

const AppContainer = createAppContainer(routes);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('Dashboard', () => App);
