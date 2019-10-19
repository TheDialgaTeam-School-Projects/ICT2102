import auth from '@react-native-firebase/auth';

export default class UserManagement {
  /**
   * Authenticate the user with email and password.
   * @param email Email for authentication.
   * @param password Password for authentication.
   * @returns {Promise<void>}
   */
  static login(email, password) {
    return new Promise(async (resolve, reject) => {
      if (email === '') {
        reject({title: 'Error', message: 'Email is empty.'});
        return;
      }

      if (password === '') {
        reject({title: 'Error', message: 'Password is empty.'});
        return;
      }

      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );

        resolve();
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }
}
