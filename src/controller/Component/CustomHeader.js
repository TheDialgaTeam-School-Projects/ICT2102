import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {StaffModel} from '../../model/Staff';
import {PatientModel} from '../../model/Patient';

export class CustomHeaderController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.didFocus = this.didFocus.bind(this);
    this.onPressLogoutButton = this.onPressLogoutButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {staff: null, patient: null};
  }

  /**
   * This event triggers when the screen is in focus.
   */
  async didFocus() {
    const staffJson = await AsyncStorage.getItem('staffInformation');
    const patientJson = await AsyncStorage.getItem('patientInformation');

    if (staffJson != null) {
      const staffModel = StaffModel.createModel(JSON.parse(staffJson));
      this.state = {staff: staffModel};
    }

    if (patientJson != null) {
      const patientModel = PatientModel.createModel(JSON.parse(patientJson));
      this.state = {patient: patientModel};
    }
  }

  /**
   * This event triggers when the logout button is pressed.
   */
  async onPressLogoutButton() {
    await AsyncStorage.removeItem('staffInformation');
    this.navigate('Main');
  }
}
