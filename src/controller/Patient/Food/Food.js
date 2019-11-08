import {Controller} from '../../Controller';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';

export class FoodController extends Controller {
  constructor(view) {
    super(view);
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

  onPressUpdateButton() {
    Alert.alert(
      'Update Food Preferences',
      'Confirm update food?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Confirm', onPress: () => {this.updateFood()}},
      ],
      {cancelable: false},
    );
  }

  async updateFood(){
    let selectedBfast = this.state.bFastData.find(e => e.selected == true);
    selectedBfast = selectedBfast ? selectedBfast.value : this.state.bFastData[0].label;
    
    let selectedLunch = this.state.lunchData.find(e => e.selected == true);
    selectedLunch = selectedLunch ? selectedLunch.value : this.state.lunchData[0].label;

    let selectedDinner = this.state.dinnerData.find(e => e.selected == true);
    selectedDinner = selectedDinner ? selectedDinner.value : this.state.dinnerData[0].label;
    try{
      this.state.patientModel.addPatientFood({
        breakfast: selectedBfast,
        lunch: selectedLunch,
        dinner: selectedDinner,
        dateTime:  Math.round((new Date()).getTime() / 1000),
      });
      await this.state.patientModel.updateDoc();
      this.state = {patientModel: this.state.patientModel};
      Alert.alert('Added successfuly!');
    }catch(e){
      Alert.alert(e.message);
    }
    
  }
}