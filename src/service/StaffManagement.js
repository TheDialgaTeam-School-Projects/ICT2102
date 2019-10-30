import firestore from '@react-native-firebase/firestore';
import {StaffModel} from '../model/Staff';
import {Config} from '../Config';
import {VariableAssertion} from '../VariableAssertion';

export class StaffManagement {
  /**
   * Authenticate the staffModel with staffModel id and password.
   * @param staffId Staff id for authentication.
   * @param password Password for authentication.
   * @returns {Promise<StaffModel>} Staff information.
   */
  static login(staffId, password) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!VariableAssertion.assertStringIsNotNullOrEmpty(staffId)) {
          reject({title: 'Error', message: 'Staff id is empty.'});
          return;
        }

        if (!VariableAssertion.assertStringIsNotNullOrEmpty(password)) {
          reject({title: 'Error', message: 'Password is empty.'});
          return;
        }

        if (Config.useInternalCache) {
          const staffModel = StaffModel.createModel(Config.staffInformation);

          if (staffModel.getStaffId() !== staffId) {
            reject({title: 'Error', message: 'Staff does not exist.'});
            return;
          }

          if (staffModel.getStaffPassword() !== password) {
            reject({title: 'Error', message: 'Password is incorrect.'});
            return;
          }

          resolve(staffModel);
        } else {
          const query = await firestore()
            .collection('staffs')
            .where('staffId', '==', staffId)
            .get();

          if (query.size === 0) {
            reject({title: 'Error', message: 'Staff does not exist.'});
            return;
          }

          const staffModel = StaffModel.createModel({
            docId: query.docs[0].id,
            ...query.docs[0].data(),
          });

          if (staffModel.staffPassword !== password) {
            reject({title: 'Error', message: 'Password is incorrect.'});
            return;
          }

          resolve(staffModel);
        }
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }
}
