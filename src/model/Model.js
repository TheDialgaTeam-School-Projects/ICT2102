import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {Config} from '../Config';
import {VariableAssertion} from '../VariableAssertion';

export class Model {
  constructor(collectionId, docId, cacheId) {
    this.collectionId = collectionId;
    this.docId = docId;
    this.cacheId = cacheId;
    this.objectChanged = {};

    this.createDoc = this.createDoc.bind(this);
    this.updateDoc = this.updateDoc.bind(this);
    this.deleteDoc = this.deleteDoc.bind(this);
    this.toJson = this.toJson.bind(this);
    this.toJsonObj = this.toJsonObj.bind(this);
  }

  /**
   * Create this model.
   * @returns {Promise<void>}
   */
  createDoc() {
    return new Promise(async (resolve, reject) => {
      try {
        if (Object.getOwnPropertyNames(this.objectChanged).length === 0) {
          reject({title: 'Error', message: 'Nothing to update.'});
          return;
        }

        if (Config.useInternalCache) {
          if (!VariableAssertion.assertStringIsNotNullOrEmpty(this.cacheId)) {
            reject({
              title: 'Error',
              message:
                'Unable to create this object due to missing cacheId. Please do not create this model manually.',
            });
            return;
          }

          await AsyncStorage.setItem(this.cacheId, this.toJson());
          this.objectChanged = {};

          resolve();
          return;
        }

        if (
          !VariableAssertion.assertStringIsNotNullOrEmpty(this.collectionId)
        ) {
          reject({
            title: 'Error',
            message:
              'Unable to create this object due to missing collectionId. Please do not create this model manually.',
          });
          return;
        }

        if (
          this.docId !== null &&
          (typeof this.docId !== 'string' || this.docId === '')
        ) {
          reject({
            title: 'Error',
            message:
              'Unable to create this object due to invalid docId. Please do not create this model manually.',
          });
          return;
        }

        if (this.docId !== null) {
          await firestore()
            .collection(this.collectionId)
            .doc(this.docId)
            .set(this.toJsonObj());
        } else {
          let doc = await firestore()
            .collection(this.collectionId)
            .add(this.toJsonObj());

          this.docId = doc.id;
        }

        this.objectChanged = {};

        resolve();
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }

  /**
   * Update this model.
   * @returns {Promise<void>}
   */
  updateDoc() {
    return new Promise(async (resolve, reject) => {
      try {
        if (Object.getOwnPropertyNames(this.objectChanged).length === 0) {
          reject({title: 'Error', message: 'Nothing to update.'});
          return;
        }

        if (Config.useInternalCache) {
          if (!VariableAssertion.assertStringIsNotNullOrEmpty(this.cacheId)) {
            reject({
              title: 'Error',
              message:
                'Unable to update this object due to missing cacheId. Please do not create this model manually.',
            });
            return;
          }

          await AsyncStorage.setItem(this.cacheId, this.toJson());
          this.objectChanged = {};

          resolve();
          return;
        }

        if (
          !VariableAssertion.assertStringIsNotNullOrEmpty(this.collectionId)
        ) {
          reject({
            title: 'Error',
            message:
              'Unable to update this object due to missing collectionId. Please do not create this model manually.',
          });
          return;
        }

        if (
          this.docId === null ||
          typeof this.docId !== 'string' ||
          this.docId === ''
        ) {
          reject({
            title: 'Error',
            message:
              'Unable to update this object due to missing docId. Please do not create this model manually.',
          });
          return;
        }

        await firestore()
          .collection(this.collectionId)
          .doc(this.docId)
          .update(this.objectChanged);

        this.objectChanged = {};

        resolve();
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }

  /**
   * Delete this model.
   * @returns {Promise<void>}
   */
  deleteDoc() {
    return new Promise(async (resolve, reject) => {
      try {
        if (Config.useInternalCache) {
          if (!VariableAssertion.assertStringIsNotNullOrEmpty(this.cacheId)) {
            reject({
              title: 'Error',
              message:
                'Unable to delete this object due to missing cacheId. Please do not create this model manually.',
            });
            return;
          }

          await AsyncStorage.removeItem(this.cacheId);
          resolve();
          return;
        }

        if (
          !VariableAssertion.assertStringIsNotNullOrEmpty(this.collectionId)
        ) {
          reject({
            title: 'Error',
            message:
              'Unable to delete this object due to missing collectionId. Please do not create this model manually.',
          });
          return;
        }

        if (!VariableAssertion.assertStringIsNotNullOrEmpty(this.docId)) {
          reject({
            title: 'Error',
            message:
              'Unable to delete this object due to missing docId. Please do not create this model manually.',
          });
          return;
        }

        await firestore()
          .collection(this.collectionId)
          .doc(this.docId)
          .delete();

        resolve();
      } catch (e) {
        reject({title: 'Error', message: e.message});
      }
    });
  }

  /**
   * Return json string representation of the model.
   * @param includeDocId Include Doc Id.
   * @returns {string}
   */
  toJson(includeDocId = false) {
    return JSON.stringify(this, (key, value) => {
      if (
        key === 'collectionId' ||
        (key === 'docId' && !includeDocId) ||
        key === 'cacheId' ||
        key === 'objectChanged'
      ) {
        return undefined;
      } else {
        return value;
      }
    });
  }

  /**
   * Return json object representation of the model.
   * @returns object
   */
  toJsonObj(includeDocId = false) {
    return JSON.parse(this.toJson(includeDocId));
  }
}
