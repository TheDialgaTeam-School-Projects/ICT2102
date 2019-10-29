import firestore from '@react-native-firebase/firestore';
import {PatientModel} from '../model/Patient';
import {Config} from '../Config';

export class PatientManagement {
  /**
   * Get patient by id.
   * @param patientId Patient id.
   * @returns {Promise<PatientModel>}
   */
  static getPatientById(patientId) {
    return new Promise(async (resolve, reject) => {
      try {
        if (patientId === '') {
          reject({title: 'Error', message: 'Patient id is empty.'});
          return;
        }

        if (Config.useInternalCache) {
          const patientModel = PatientModel.createModel(
            Config.patientInformation,
          );

          if (patientModel.patientId !== patientId) {
            reject({title: 'Error', message: 'Patient does not exist.'});
            return;
          }

          resolve(patientModel);
        } else {
          const query = await firestore()
            .collection('patients')
            .where('patientId', '==', patientId)
            .get();

          if (query.size === 0) {
            reject({title: 'Error', message: 'Patient does not exist.'});
            return;
          }

          const patientModel = PatientModel.createModel(query.docs[0].data());

          resolve(patientModel);
        }
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }
}
