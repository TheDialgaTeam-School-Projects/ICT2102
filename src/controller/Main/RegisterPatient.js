import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {PatientManagement} from '../../service/PatientManagement';

export class RegisterPatientController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onChangeTextPatientIdInput = this.onChangeTextPatientIdInput.bind(
      this,
    );
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.onPressSubmitButton = this.onPressSubmitButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {
      patientId: '',
      isLoading: false,
    };
  }

  /**
   * This event triggers when the screen is in focus.
   */
  willFocus() {
    this.state = {isLoading: false};
  }

  /**
   * This event update the patientModel id state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextPatientIdInput(value) {
    this.state = {patientId: value};
  }

  /**
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }

  /**
   * This event triggers when the submit button is pressed.
   * @returns {Promise<void>}
   */
  async onPressSubmitButton() {
    try {
      this.state = {isLoading: true};

      const patientModel = await PatientManagement.getPatientById(
        this.state.patientId,
      );

      await AsyncStorage.setItem(
        'patientInformation',
        patientModel.toJson(true),
      );

      this.state = {isLoading: false};
      this.navigate('Patient');
    } catch (e) {
      this.state = {isLoading: false};
      Alert.alert(e.title, e.message, [{text: 'OK'}]);
    }
  }
}
