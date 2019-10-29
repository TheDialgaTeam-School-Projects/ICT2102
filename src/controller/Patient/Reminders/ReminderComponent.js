import {Controller} from '../../Controller';

export class ReminderComponentController extends Controller {
  constructor(view) {
    super(view);
    this.onPressEditButton = this.onPressEditButton.bind(this);
    this.onPressDeleteButton = this.onPressDeleteButton.bind(this);
  }

  onPressEditButton() {
    this.navigate('RemindersAction', {action: 'edit', data: this.props.value});
  }

  onPressDeleteButton() {
    // TODO: Do deletion logic here.
  }
}
