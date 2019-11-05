import {Controller} from '../../Controller';

export class VitalsController extends Controller {
  constructor(view) {
    super(view);
    this.onPressVitalsHistory = this.onPressVitalsHistory.bind(this);
  }

  onPressVitalsHistory() {
    this.navigate('VitalsHistory', {action: 'add'});
  }
}