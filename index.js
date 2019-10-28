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
import {RemindersView} from './src/view/Patient/Reminders/Reminders';
import {MedicineView} from './src/view/Patient/Medicine/Medicine';
import {AddRemindersView} from './src/view/Patient/Reminders/AddReminders';

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
      RemindersTab: createStackNavigator(
        {
          Reminders: {
            screen: RemindersView,
          },
          AddReminders: {
            screen: AddRemindersView,
          },
        },
        {
          defaultNavigationOptions: () => ({
            header: <HeaderComponent />,
          }),
        },
      ),
      Medicine: {
        screen: MedicineView,
        navigationOptions: () => ({
          title: 'Medicine',
        }),
      },
      CaseNotes: {
        screen: RemindersView,
        navigationOptions: () => ({
          title: 'Case Notes',
        }),
      },
      Food: {
        screen: RemindersView,
        navigationOptions: () => ({
          title: 'Food',
        }),
      },
      Vitals: {
        screen: RemindersView,
        navigationOptions: () => ({
          title: 'Vitals',
        }),
      },
      Faq: {
        screen: RemindersView,
        navigationOptions: () => ({
          title: 'Faq',
        }),
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
