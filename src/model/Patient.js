import {Model} from './Model';

export class PatientModel extends Model {
  constructor(docId, jsonObj) {
    super('patients', docId, 'patientInformation');
    this.patientId = jsonObj?.patientId ?? '';
    this.patientName = jsonObj?.patientName ?? '';
    this.Address = jsonObj?.Address ?? [];
    this.emergencyContact = jsonObj?.emergencyContact ?? '';
    this.patientConditions = jsonObj?.patientConditions ?? [];
    this.patientReminders = jsonObj?.patientReminders ?? [];
    this.Medicine = jsonObj?.Medicine ?? [];
    this.patientCaseNotes = jsonObj?.patientCaseNotes ?? {
      Assessment: [],
      Objective: [],
      Plan: [],
      Subjective: [],
    };
    this.patientVitals = jsonObj?.patientVitals ?? [];

    this.getPatientId = this.getPatientId.bind(this);
    this.setPatientId = this.setPatientId.bind(this);
    this.getPatientName = this.getPatientName.bind(this);
    this.setPatientName = this.setPatientName.bind(this);
    this.getPatientEmergencyContact = this.getPatientEmergencyContact.bind(
      this,
    );
    this.setPatientEmergencyContact = this.setPatientEmergencyContact.bind(
      this,
    );
    this.getPatientConditions = this.getPatientConditions.bind(this);
    this.setPatientConditions = this.setPatientConditions.bind(this);
    this.getPatientReminders = this.getPatientReminders.bind(this);
    this.getPatientAddress = this.getPatientAddress.bind(this);
    this.setPatientAddress = this.setPatientAddress.bind(this);
    this.addPatientReminders = this.addPatientReminders.bind(this);
    this.deletePatientReminders = this.deletePatientReminders.bind(this);
    this.updatePatientReminders = this.updatePatientReminders.bind(this);
    this.getPatientMedicine = this.getPatientMedicine.bind(this);
  }

  /**
   * Create patient model.
   * @param jsonObj Object to create.
   * @returns {PatientModel}
   */
  static createModel(jsonObj) {
    return new PatientModel(jsonObj?.docId, jsonObj);
  }

  /**
   * Get patient id.
   * @returns {string}
   */
  getPatientId() {
    return this.patientId;
  }

  /**
   * Set patient id.
   * @param value Patient id to update.
   */
  setPatientId(value) {
    this.patientId = value;
    this.objectChanged.patientId = value;
  }

  /**
   * Get patient name.
   * @returns {string}
   */
  getPatientName() {
    return this.patientName;
  }

  /**
   * Set patient name.
   * @param value Patient name to update.
   */
  setPatientName(value) {
    this.patientName = value;
    this.objectChanged.patientName = value;
  }

  /**
   * Get patientModel emergency contact.
   * @returns {string}
   */
  getPatientEmergencyContact() {
    return this.emergencyContact;
  }

  /**
   * Set patientModel name.
   * @param value Patient emergency contact to update.
   */
  setPatientEmergencyContact(value) {
    this.emergencyContact = value;
    this.objectChanged.emergencyContact = value;
  }

  /**
   * Get patientModel conditions.
   * Get patient conditions.
   * @returns {string[]}
   */
  getPatientConditions() {
    return this.patientConditions;
  }

  /**
   * Set patient conditions.
   * @param value Patient conditions to update.
   */
  setPatientConditions(value) {
    this.patientConditions = value;
    this.objectChanged.patientConditions = value;
  }

  /**
   * Get patient reminders.
   * @returns {{dateTime: number, description: string}[]}
   */
  getPatientReminders() {
    return this.patientReminders;
  }

  /**
   * Get patientModel address.
   * @returns address
   */
  getPatientAddress() {
    return this.Address;
  }

  /**
   * Set patientModel address.
   * @param value Patient address to update.
   */
  setPatientAddress(value) {
    this.Address = value;
    this.objectChanged.Address = value;
  }

  /**
   * Add new patient reminders.
   * @param value Patient reminders to add.
   */
  addPatientReminders(value) {
    this.patientReminders.push(value);
    this.objectChanged.patientReminders = this.patientReminders;
  }

  /**
   * Delete patient reminders by index.
   * @param index Patient reminder to delete.
   */
  deletePatientReminders(index) {
    this.patientReminders.splice(index, 1);
    this.objectChanged.patientReminders = this.patientReminders;
  }

  /**
   * Update patient reminders by index.
   * @param index Patient reminder to update.
   * @param value Reminder object.
   */
  updatePatientReminders(index, value) {
    this.patientReminders[index] = value;
    this.objectChanged.patientReminders = this.patientReminders;
  }

  getPatientMedicine() {
    return this.Medicine;
  }
}
