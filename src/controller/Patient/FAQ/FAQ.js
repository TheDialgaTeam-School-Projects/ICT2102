import AsyncStorage from '@react-native-community/async-storage';
import { Controller } from '../../Controller';
import { PatientModel } from '../../../model/Patient';
import { PatientManagement } from '../../../service/PatientManagement';
import { DeviceCacheManagement } from '../../../service/DeviceCacheManagement';

export class FAQController extends Controller {
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
    try {
      this.state = { patient: await DeviceCacheManagement.getPatientModelFromCache(true) };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = { patient: null };
    }
  }
}
