import {Controller} from '../../Controller';

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
      data: null,
      isLoading: false,
      description: null,
      dateTime: null,
    };
  }

  /**
   * This event triggers when the screen is in focus.
   */
  willFocus() {
    this.state = {
      action: this.getParam('action', null),
      data: this.getParam('data', null),
      isLoading: false,
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
  onPressSubmitButton() {

  }
}
