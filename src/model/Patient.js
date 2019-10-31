import {Model} from './Model';

export class PatientModel extends Model {
  constructor(docId, jsonObj) {
    super('patients', docId, 'patientInformation');
    this.patientId = jsonObj?.patientId ?? '';
    this.patientName = jsonObj?.patientName ?? '';
    this.patientConditions = jsonObj?.patientConditions ?? [];
    this.patientReminders = jsonObj?.patientReminders ?? [];

    this.getPatientId = this.getPatientId.bind(this);
    this.setPatientId = this.setPatientId.bind(this);
    this.getPatientName = this.getPatientName.bind(this);
    this.setPatientName = this.setPatientName.bind(this);
    this.getPatientConditions = this.getPatientConditions.bind(this);
    this.setPatientConditions = this.setPatientConditions.bind(this);
    this.getPatientReminders = this.getPatientReminders.bind(this);
    this.setPatientReminders = this.setPatientReminders.bind(this);
  }

  /**
   * Create patientModel model.
   * @param jsonObj Object to create.
   * @returns {PatientModel}
   */
  static createModel(jsonObj) {
    return new PatientModel(jsonObj?.docId, jsonObj);
  }

  /**
   * Get patientModel id.
   * @returns {string}
   */
  getPatientId() {
    return this.patientId;
  }

  /**
   * Set patientModel id.
   * @param value Patient id to update.
   */
  setPatientId(value) {
    this.patientId = value;
    this.objectChanged.patientId = value;
  }

  /**
   * Get patientModel name.
   * @returns {string}
   */
  getPatientName() {
    return this.patientName;
  }

  /**
   * Set patientModel name.
   * @param value Patient name to update.
   */
  setPatientName(value) {
    this.patientName = value;
    this.objectChanged.patientName = value;
  }

  /**
   * Get patientModel conditions.
   * @returns {string[]}
   */
  getPatientConditions() {
    return this.patientConditions;
  }

  /**
   * Set patientModel conditions.
   * @param value Patient conditions to update.
   */
  setPatientConditions(value) {
    this.patientConditions = value;
    this.objectChanged.patientConditions = value;
  }

  /**
   * Get patientModel reminders.
   * @returns {{dateTime: number, description: string}[]}
   */
  getPatientReminders() {
    return this.patientReminders;
  }

  /**
   * Set patientModel reminders.
   * @param value Patient reminders to update.
   */
  setPatientReminders(value) {
    this.patientReminders = value;
    this.objectChanged.patientReminders = value;
  }
}
