import AsyncStorage from '@react-native-community/async-storage';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';
import {Controller} from '../../Controller';

export class MedicineController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  componentDidMount() {
    this.state = {patientModel: null};
  }

  async willFocus() {
    try {
      this.state = {
        patientModel: await DeviceCacheManagement.getPatientModelFromCache(
          true,
        ),
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
      this.navigate('RegisterPatient');
    }
  }
}
