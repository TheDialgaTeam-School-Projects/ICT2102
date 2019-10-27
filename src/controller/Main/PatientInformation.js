import {Controller} from '../Controller';

export class PatientInformationController extends Controller {
  constructor(view) {
    super(view);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  onPressLoginButton() {
    this.navigate('Login');
  }
}
