import {Controller} from '../../Controller';

export class ProfileController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  componentDidMount() {
    this.state = {profileModel: null};
  }

  async willFocus() {
      try {
        this.state = {
          profileModel: await DeviceCacheManagement.getPatientModelFromCache(
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
