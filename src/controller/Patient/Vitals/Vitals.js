import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../../Controller';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';
import {Alert} from 'react-native';

export class VitalsController extends Controller {
  constructor(view) {
    super(view);
    this.onPressVitalsHistory = this.onPressVitalsHistory.bind(this);
    this.onPressUpdateButton = this.onPressUpdateButton.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
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

  onPressVitalsHistory() {
    this.navigate('VitalsHistory', {action: 'add'});
  }

  onPressUpdateButton() {

    Alert.alert(
      'Update Vitals',
      'Confirm update vitals?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Confirm', onPress: () => {this.updateVitals()}},
      ],
      {cancelable: false},
    );
  }

  async updateVitals(){
    if(this.state.temperature == '' || this.state.sys == '' || this.state.dia == '' || this.state.pulse == ''){
      Alert.alert('Input fields cannot be empty!');
    }
    else if(isNaN(this.state.temperature) || isNaN(this.state.sys) || isNaN(this.state.dia) || isNaN(this.state.pulse)){
      Alert.alert('Only numbers are allowed!');
    }
    else if(this.state.temperature < 1 || this.state.sys < 1 || this.state.dia < 1 || this.state.pulse < 1){
      Alert.alert('Invalid Input! No negative numbers!');
    }
    else{
      this.state.patientModel.addPatientVitals({
        temp: this.state.temperature,
        sys: this.state.sys,
        dia: this.state.dia,
        pulse: this.state.pulse,
        dateTime:  Math.round((new Date()).getTime() / 1000),
      });
      await this.state.patientModel.updateDoc();
      this.state = {patientModel: this.state.patientModel};
      Alert.alert('Added successfuly!');
    }
  }
}