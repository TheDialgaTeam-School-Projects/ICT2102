import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HeaderComponent} from './src/view/Component/Header';
import {FooterTabComponent} from './src/view/Component/FooterTabs';
import {PatientInformationView} from './src/view/Main/PatientInformation';
import {StaffLoginView} from './src/view/Main/StaffLogin';
import {RegisterPatientView} from './src/view/Main/RegisterPatient';
import {RemindersView} from './src/view/Patient/Reminders';

const routes = createSwitchNavigator({
  Main: createStackNavigator(
    {
      PatientInformation: {
        screen: PatientInformationView,
      },
      StaffLogin: {
        screen: StaffLoginView,
      },
      RegisterPatient: {
        screen: RegisterPatientView,
        navigationOptions: () => ({
          header: <HeaderComponent hasHeader={false} />,
        }),
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
        screen: RemindersView,
      },
      Medicine: {
        screen: RemindersView,
      },
      CaseNotes: {
        screen: RemindersView,
      },
      Food: {
        screen: RemindersView,
      },
      Vitals: {
        screen: RemindersView,
      },
      Faq: {
        screen: RemindersView,
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
