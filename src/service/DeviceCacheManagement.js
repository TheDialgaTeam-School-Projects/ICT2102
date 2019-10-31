import AsyncStorage from '@react-native-community/async-storage';
import {PatientManagement} from './PatientManagement';
import {PatientModel} from '../model/Patient';
import {StaffModel} from '../model/Staff';

export class DeviceCacheManagement {
  /**
   * Get staff model from device cache.
   * @returns {Promise<StaffModel>}
   */
  static async getStaffModelFromCache() {
    const staffJson = await AsyncStorage.getItem('staffInformation');

    if (!staffJson) {
      return null;
    }

    return StaffModel.createModel(JSON.parse(staffJson));
  }

  /**
   * Get patient model from device cache.
   * @param updateFromServer Force update from server?
   * @returns {Promise<PatientModel>}
   */
  static async getPatientModelFromCache(updateFromServer = false) {
    const patientJson = await AsyncStorage.getItem('patientInformation');

    if (!patientJson) {
      return null;
    }

    const patientModelCache = PatientModel.createModel(JSON.parse(patientJson));

    if (!updateFromServer) {
      return patientModelCache;
    }

    const patientModel = await PatientManagement.getPatientById(
      patientModelCache.getPatientId(),
    );

    await AsyncStorage.setItem('patientInformation', patientModel.toJson(true));

    return patientModel;
  }

  /**
   * Clear device cache.
   * @returns {Promise<void>}
   */
  static async clearDeviceCache() {
    await AsyncStorage.removeItem('staffInformation');
    await AsyncStorage.removeItem('patientInformation');
  }
}
