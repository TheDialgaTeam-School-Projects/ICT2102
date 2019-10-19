import Controller from '../Controller';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserManagement from '../../service/UserManagement';

export default class LoginScreenController extends Controller {
  constructor(view) {
    super(view);
    /*******************************************************************************************************************
     * Important:
     * Please remember to bind your functions to preserve the object state to this class.
     * Otherwise, it would use the object state where it is called which can be undesirable.
     ******************************************************************************************************************/
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onChangeTextEmail = this.onChangeTextEmail.bind(this);
    this.onChangeTextPassword = this.onChangeTextPassword.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressRegister = this.onPressRegister.bind(this);
  }

  /**
   * This event triggers during componentDidMount event.
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    try {
      this.state = {
        email: (await AsyncStorage.getItem('email')) ?? '',
        password: (await AsyncStorage.getItem('password')) ?? '',
        isLoading: false,
      };
    } catch (e) {}
  }

  /**
   * This event update the email state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextEmail(value) {
    this.state = {email: value};
  }

  /**
   * This event update the password state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextPassword(value) {
    this.state = {password: value};
  }

  /**
   * This event triggers when login button is pressed.
   * @returns {Promise<void>}
   */
  async onPressLogin() {
    this.state = {isLoading: true};

    try {
      await UserManagement.login(this.state.email, this.state.password);

      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('password', this.state.password);

      this.state = {isLoading: false};
    } catch (e) {
      Alert.alert(e.title, e.message, [
        {text: 'OK', onPress: () => (this.state = {isLoading: false})},
      ]);
    }
  }

  /**
   * This event triggers when register button is pressed.
   */
  onPressRegister() {
    this.navigate('Register');
  }
}
