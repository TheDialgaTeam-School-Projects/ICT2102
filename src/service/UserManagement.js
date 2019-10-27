import firestore from '@react-native-firebase/firestore';

export class UserManagement {
  /**
   * Authenticate the user with user id and password.
   * @param userId User id for authentication.
   * @param password Password for authentication.
   * @returns {Promise<void>}
   */
  static login(userId, password) {
    return new Promise(async (resolve, reject) => {
      if (userId === '') {
        reject({title: 'Error', message: 'User id is empty.'});
        return;
      }

      if (password === '') {
        reject({title: 'Error', message: 'Password is empty.'});
        return;
      }

      try {
        let query = await firestore()
          .collection('users')
          .where('userId', '==', userId)
          .get();

        if (query.size === 0) {
          reject({title: 'Error', message: 'User does not exist.'});
          return;
        }

        if (query.docs[0].data().password !== password) {
          reject({title: 'Error', message: 'Password is incorrect.'});
          return;
        }

        resolve();
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }
}
