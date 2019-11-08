import {Controller} from '../../Controller';
import AsyncStorage from '@react-native-community/async-storage';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';
import {Alert} from 'react-native';

export class VitalsHistoryController extends Controller {
  constructor(view) {
    super(view);
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    try {
      const patientModel = await DeviceCacheManagement.getPatientModelFromCache(
        true,
      );
      
      const vitals = patientModel.getPatientVitals();
      
      let arrTemp = [];
      let arrDate = [];
      let arrSys = [];
      let arrDia = [];
      let arrPulse = [];
      
      if(vitals.length > 7){
        for(i = vitals.length-1; i > vitals.length - 8; i--){
          arrTemp.push(vitals[i].temp);
          var a = new Date(vitals[i].dateTime * 1000);
          var hour = a.getHours() + 8;
          var min = a.getMinutes();
          arrDate.push(hour + ':' + min + 'h');
          arrSys.push(vitals[i].sys);
          arrDia.push(vitals[i].dia);
          arrPulse.push(vitals[i].pulse);
        }
      }
      else{
        for(i = 0; i < vitals.length; i++){
          arrTemp.push(vitals[i].temp);
          var a = new Date(vitals[i].dateTime * 1000);
          var hour = a.getHours() + 8;
          var min = a.getMinutes();
          arrDate.push(hour + ':' + min + 'h');
          arrSys.push(vitals[i].sys);
          arrDia.push(vitals[i].dia);
          arrPulse.push(vitals[i].pulse);
        }
      }

      this.state = {
        patientModel: patientModel,
        temperature: arrTemp,
        dateTime: arrDate,
        sys: arrSys,
        dia: arrDia,
        pulse: arrPulse,
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
      this.navigate('RegisterPatient');
    }
  }

  /**
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }
}
