import {Controller} from '../Controller';
import {Alert} from 'react-native';
import {UserManagement} from '../../service/UserManagement';

export class LoginScreenController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.didFocus = this.didFocus.bind(this);
    this.onChangeTextUserIdLabel = this.onChangeTextUserIdLabel.bind(this);
    this.onChangeTextPasswordLabel = this.onChangeTextPasswordLabel.bind(this);
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {
      userId: '',
      password: '',
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
   * This event update the user id state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextUserIdLabel(value) {
    this.state = {userId: value};
  }

  /**
   * This event update the password state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextPasswordLabel(value) {
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
      // TODO: PLEASE REMOVE THIS COMMENT TO ENABLE THIS MODULE.
      // This is intentionally disabled so that we aren't wasting daily API calls for testing.
      // await UserManagement.login(this.state.userId, this.state.password);
      this.state = {isLoading: false};
      this.navigate('Patient');
    } catch (e) {
      this.state = {isLoading: false};
      Alert.alert(e.title, e.message, [{text: 'OK'}]);
    }
  }
}
