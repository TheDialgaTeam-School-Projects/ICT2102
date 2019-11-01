import AsyncStorage from '@react-native-community/async-storage';
import { Controller } from '../../Controller';
import { PatientModel } from '../../../model/Patient';
import { PatientManagement } from '../../../service/PatientManagement';

export class CaseNotesController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = { patient: null };
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    const patientJson = await AsyncStorage.getItem('patientInformation');

    if (patientJson != null) {
      try {
        const patientModel = PatientModel.createModel(JSON.parse(patientJson));
        const patientInformation = await PatientManagement.getPatientById(
          patientModel.patientId,
        );

        await AsyncStorage.setItem(
          'patientInformation',
          patientInformation.toJson(),
        );

        this.state = { patient: patientInformation };
      } catch (e) {
        await AsyncStorage.removeItem('patientInformation');
        this.state = { patient: null };
      }
    }
  }
}
