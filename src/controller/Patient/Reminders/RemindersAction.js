import {Controller} from '../../Controller';
import {Alert} from 'react-native';

export class RemindersActionController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onChangeTextDescription = this.onChangeTextDescription.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.onPressSubmitButton = this.onPressSubmitButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {
      action: null,
      patientModel: null,
      index: 0,
      isLoading: false,
      description: null,
      dateTime: null,
    };
  }

  /**
   * This event triggers when the screen is in focus.
   */
  willFocus() {
    const action = this.getParam('action', null);
    const patientModel = this.getParam('patientModel', null);
    const index = this.getParam('index', 0);
    let description = '';
    let dateTime = '';

    if (action === 'add') {
      dateTime = new Date();
    } else if (action === 'edit' && patientModel) {
      description = patientModel.getPatientReminders()[index].description;
      dateTime = new Date(
        patientModel.getPatientReminders()[index].dateTime * 1000,
      );
    }

    this.state = {
      action: this.getParam('action', null),
      patientModel: patientModel,
      index: index,
      isLoading: false,
      description: description,
      dateTime: dateTime,
    };
  }

  /**
   * This event update the description state during onChangeText event.
   * @param value TextInput value.
   */
  onChangeTextDescription(value) {
    this.state = {description: value};
  }

  /**
   * This event triggers when the date time is changed.
   * @param value Date value.
   */
  onDateChange(value) {
    this.state = {dateTime: value};
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
  async onPressSubmitButton() {
    this.state = {isLoading: true};

    try {
      if (this.state.action === 'add') {
        this.state.patientModel.addPatientReminders({
          description: this.state.description,
          dateTime: Math.floor(this.state.dateTime.getTime() / 1000),
        });
      } else if (this.state.action === 'edit') {
        this.state.patientModel.updatePatientReminders(this.state.index, {
          description: this.state.description,
          dateTime: Math.floor(this.state.dateTime.getTime() / 1000),
        });
      }
      await this.state.patientModel.updateDoc();
      this.state = {isLoading: false, patientModel: this.state.patientModel};
      this.navigate('Reminders');
    } catch (e) {
      this.state = {isLoading: false};
      Alert.alert(e.title, e.message, [{text: 'OK'}]);
    }
  }
}
