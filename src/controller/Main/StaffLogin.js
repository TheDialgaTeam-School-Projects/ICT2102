import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {StaffManagement} from '../../service/StaffManagement';
import {DeviceCacheManagement} from '../../service/DeviceCacheManagement';

export class LoginScreenController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onChangeTextStaffIdInput = this.onChangeTextStaffIdInput.bind(this);
    this.onChangeTextPasswordInput = this.onChangeTextPasswordInput.bind(this);
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {
      staffId: '',
      password: '',
      isLoading: false,
    };
  }

  /**
   * This event triggers when the screen is in focus.
   */
  async willFocus() {
    this.state = {isLoading: false};
    await AsyncStorage.removeItem('staffInformation');
  }

  /**
   * This event update the staffModel id state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextStaffIdInput(value) {
    this.state = {staffId: value};
  }

  /**
   * This event update the password state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextPasswordInput(value) {
    this.state = {password: value};
  }

  /**
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }

  /**
   * This event triggers when login button is pressed.
   * @returns {Promise<void>}
   */
  async onPressLoginButton() {
    try {
      this.state = {isLoading: true};

      const staffModel = await StaffManagement.login(
        this.state.staffId,
        this.state.password,
      );

      await AsyncStorage.setItem('staffInformation', staffModel.toJson(true));

      this.state = {isLoading: false};

      if (await DeviceCacheManagement.getPatientModelFromCache()) {
        this.navigate('Patient');
      } else {
        this.navigate('RegisterPatient');
      }
    } catch (e) {
      this.state = {isLoading: false};
      Alert.alert(e.title, e.message, [{text: 'OK'}]);
    }
  }
}
