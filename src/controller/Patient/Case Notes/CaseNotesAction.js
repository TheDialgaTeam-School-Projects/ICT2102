import {Controller} from '../../Controller';

export class CaseNotesActionController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onPressBackButton = this.onPressBackButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {action: null, data: null, isLoading: false};
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
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }
}
