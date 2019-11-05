import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {View} from 'native-base';
import {FooterTabComponent} from './src/view/Component/FooterTabs';
import {PatientInformationView} from './src/view/Main/PatientInformation';
import {StaffLoginView} from './src/view/Main/StaffLogin';
import {RegisterPatientView} from './src/view/Main/RegisterPatient';
import {RemindersView} from './src/view/Patient/Reminders/Reminders';
import {CaseNotesView} from './src/view/Patient/CaseNotes/CaseNotes';
import {MedicineView} from './src/view/Patient/Medicine/Medicine';
import {RemindersActionView} from './src/view/Patient/Reminders/RemindersAction';
import {ProfileView} from './src/view/Patient/Profile/Profile';
import {VitalsView} from './src/view/Patient/Vitals/Vitals';
import {FoodView} from './src/view/Patient/Food/Food';
import {VitalsHistoryView} from './src/view/Patient/Vitals/VitalsHistory';

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
        header: <View />,
      }),
    },
  ),
  Patient: createBottomTabNavigator(
    {
      Reminders: createStackNavigator(
        {
          Reminders: {
            screen: RemindersView,
          },
          RemindersAction: {
            screen: RemindersActionView,
          },
        },
        {
          defaultNavigationOptions: () => ({
            header: <View />,
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
        screen: CaseNotesView,
        navigationOptions: () => ({
          title: 'Case Notes',
        }),
      },
      Food: {
        screen: FoodView,
        navigationOptions: () => ({
          title: 'Food',
        }),
      },
      Vitals: createStackNavigator(
        {
          Vitals: {
            screen: VitalsView,
          },
          VitalsHistory: {
            screen: VitalsHistoryView,
          },
        },
        {
          defaultNavigationOptions: () => ({
            header: <View />,
          }),
        },
      ),
      Faq: {
        screen: RemindersView,
        navigationOptions: () => ({
          title: 'Faq',
        }),
      },
      Profile: {
        screen: ProfileView,
        navigationOptions: () => ({
         title: 'Profile',
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

//Testing123

AppRegistry.registerComponent('Dashboard', () => App);
