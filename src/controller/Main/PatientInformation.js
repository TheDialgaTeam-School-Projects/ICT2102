import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {Controller} from '../Controller';
import {PatientModel} from '../../model/Patient';
import {Config} from '../../Config';

export class PatientInformationController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.didFocus = this.didFocus.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {patient: null};
  }

  /**
   * This event triggers when the screen is in focus.
   */
  async didFocus() {
    const patientJson = await AsyncStorage.getItem('patientInformation');

    if (patientJson != null) {
      const patientModel = PatientModel.createModel(JSON.parse(patientJson));

      if (Config.useInternalCache) {
        this.state = {patient: patientModel};
        return;
      }

      const patientQuery = await firestore()
        .collection('patients')
        .where('patientId', '==', patientModel.patientId)
        .get();

      if (patientQuery.size === 0) {
        this.state = {patient: null};
      } else {
        const newPatientModel = PatientModel.createModel(
          patientQuery.docs[0].data(),
        );

        this.state = {patient: newPatientModel};
      }
    }
  }

  /**
   * This event triggers when the login button is pressed.
   */
  onPressLoginButton() {
    this.navigate('StaffLogin');
  }
}
