import {Controller} from '../../Controller';

export class CaseNotesComponentController extends Controller {
  constructor(view) {
    super(view);
    this.onPressEditButton = this.onPressEditButton.bind(this);
    this.onPressDeleteButton = this.onPressDeleteButton.bind(this);
  }

  onPressEditButton() {
    // TODO: Do edit logic here.
  }

  onPressDeleteButton() {
    // TODO: Do deletion logic here.
  }
}