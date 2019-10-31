import {Controller} from '../../Controller';

export class VitalsHistoryController extends Controller {
  constructor(view) {
    super(view);
    this.onPressBackButton = this.onPressBackButton.bind(this);
  }

  /**
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }
}
