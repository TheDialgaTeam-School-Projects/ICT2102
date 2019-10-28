import {Model} from './Model';

export class PatientModel extends Model {
  constructor(jsonObj) {
    super();
    this.patientName = jsonObj?.patientName ?? '';
    this.patientConditions = jsonObj?.patientConditions ?? [];
  }

  /**
   * Create a new patient model.
   * @param jsonObj Json object data for creation.
   * @returns {PatientModel}
   */
  static createModel(jsonObj) {
    return new PatientModel(jsonObj);
  }
}
