import firestore from '@react-native-firebase/firestore';
import {StaffModel} from '../model/Staff';

export class StaffManagement {
  /**
   * Authenticate the staff with staff id and password.
   * @param staffId Staff id for authentication.
   * @param password Password for authentication.
   * @returns {Promise<StaffModel>} Staff information.
   */
  static login(staffId, password) {
    return new Promise(async (resolve, reject) => {
      try {
        if (staffId === '') {
          reject({title: 'Error', message: 'Staff id is empty.'});
          return;
        }

        if (password === '') {
          reject({title: 'Error', message: 'Password is empty.'});
          return;
        }

        const query = await firestore()
          .collection('staffs')
          .where('staffId', '==', staffId)
          .get();

        if (query.size === 0) {
          reject({title: 'Error', message: 'Staff does not exist.'});
          return;
        }

        const staffModel = StaffModel.createModel(query.docs[0].data());

        if (staffModel.staffPassword !== password) {
          reject({title: 'Error', message: 'Password is incorrect.'});
          return;
        }

        resolve(staffModel);
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }
}
