import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {Controller} from '../../Controller';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';

export class RemindersController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onPressAddReminder = this.onPressAddReminder.bind(this);
    this.onPressEditReminder = this.onPressEditReminder.bind(this);
    this.onPressDeleteReminder = this.onPressDeleteReminder.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {patientModel: null};
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    try {
      this.state = {
        patientModel: await DeviceCacheManagement.getPatientModelFromCache(
          true,
        ),
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
      this.navigate('RegisterPatient');
    }
  }

  /**
   * This event triggers when add reminder button is pressed.
   */
  onPressAddReminder() {
    this.navigate('RemindersAction', {action: 'add'});
  }

  /**
   * This event triggers when edit reminder button is pressed.
   */
  onPressEditReminder(index) {}

  /**
   * This event triggers when delete reminder button is pressed.
   */
  onPressDeleteReminder(index) {
    Alert.alert(
      'Delete confirmation:',
      `Are you sure you want to delete Reminder #${index + 1}?`,
      [
        {text: 'NO'},
        {
          text: 'YES',
          onPress: async () => {
            this.state.patientModel.getPatientReminders().splice(index, 1);
            this.state.patientModel.setPatientReminders(
              this.state.patientModel.getPatientReminders(),
            );
            await this.state.patientModel.updateDoc();

            this.state = {patientModel: this.state.patientModel};
          },
        },
      ],
    );
  }
}
