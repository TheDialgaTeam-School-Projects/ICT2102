import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {LoginScreenView} from './src/view/Main/LoginScreen';
import {FooterTabComponent} from './src/view/Component/FooterTabs';
import {HeaderComponent} from './src/view/Component/Header';
import {PatientInformationView} from './src/view/Main/PatientInformation';
import {TestView} from './src/view/Main/Test';

const routes = createSwitchNavigator({
  Main: createStackNavigator(
    {
      PatientInformation: {
        screen: PatientInformationView,
      },
      Login: {
        screen: LoginScreenView,
      },
    },
    {
      defaultNavigationOptions: () => ({
        header: <HeaderComponent />,
      }),
    },
  ),
  Patient: createBottomTabNavigator(
    {
      Reminders: {
        screen: TestView,
        navigationOptions: () => ({
          tabBarLabel: 'Reminders',
        }),
      },
      Medicine: {
        screen: TestView,
      },
      CaseNotes: {
        screen: TestView,
        navigationOptions: () => ({
          tabBarLabel: 'Case Notes',
        }),
      },
      Food: {
        screen: TestView,
      },
      Vitals: {
        screen: TestView,
      },
      Faq: {
        screen: TestView,
      },
    },
    {
      tabBarComponent: FooterTabComponent,
    },
  ),
});

const AppContainer = createAppContainer(routes);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('Dashboard', () => App);
