import {Alert} from 'react-native';
import {Controller} from '../Controller';

export class RegisterPatientController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.didFocus = this.didFocus.bind(this);
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
  didFocus() {
    this.state = {isLoading: false};
  }

  /**
   * This event update the patient id state during onChangeText event.
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
   */
  onPressSubmitButton() {
    try {
      this.state = {isLoading: true};

      // TODO: PLEASE REMOVE THIS COMMENT TO ENABLE THIS MODULE.
      // This is intentionally disabled so that we aren't wasting daily API calls for testing.
      /*
      const staffInformation = await StaffManagement.login(
        this.state.staffId,
        this.state.password,
      );

      await AsyncStorage.setItem(
        'staffInformation',
        JSON.stringify(staffInformation.toJsonObj()),
      );
      */

      this.state = {isLoading: false};
      this.navigate('Patient');
    } catch (e) {
      this.state = {isLoading: false};
      Alert.alert(e.title, e.message, [{text: 'OK'}]);
    }
  }
}
