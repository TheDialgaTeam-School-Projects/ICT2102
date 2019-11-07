import {Model} from './Model';

export class PatientModel extends Model {
  constructor(docId, jsonObj) {
    super('patients', docId, 'patientInformation');
    this.patientId = jsonObj?.patientId ?? '';
    this.patientName = jsonObj?.patientName ?? '';
    this.patientConditions = jsonObj?.patientConditions ?? [];
    this.patientReminders = jsonObj?.patientReminders ?? [];
    this.patientVitals = jsonObj?.patientVitals ?? [];
    this.patientMeals = jsonObj?.patientMeals ?? [];

    this.getPatientId = this.getPatientId.bind(this);
    this.setPatientId = this.setPatientId.bind(this);
    this.getPatientName = this.getPatientName.bind(this);
    this.setPatientName = this.setPatientName.bind(this);
    this.getPatientConditions = this.getPatientConditions.bind(this);
    this.setPatientConditions = this.setPatientConditions.bind(this);
    this.getPatientReminders = this.getPatientReminders.bind(this);
    this.setPatientReminders = this.setPatientReminders.bind(this);

    this.addPatientReminders = this.addPatientReminders.bind(this);
    this.deletePatientReminders = this.deletePatientReminders.bind(this);
    this.updatePatientReminders = this.updatePatientReminders.bind(this);

    this.getPatientVitals = this.getPatientVitals.bind(this);
    this.addPatientVitals = this.addPatientVitals.bind(this);
    this.addPatientFood = this.addPatientFood.bind(this);
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
   * Set patient reminders.
   * @param value Patient reminders to update.
   */
  setPatientReminders(value) {
    this.patientReminders = value;
    this.objectChanged.patientReminders = value;
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

  /**
   * Get patient vitals.
   * @returns {{dateTime: number, dia: number, pulse: number, sys: number, temp: number}[]}
   */
  getPatientVitals() {
    return this.patientVitals;
  }

  /**
   * Add new patient vitals.
   * @param value Patient vitals to add.
   */
  addPatientVitals(value) {
    this.patientVitals.push(value);
    this.objectChanged.patientVitals = this.patientVitals;
  }

  /**
   * Add new patient food.
   * @param value Patient food to add.
   */
  addPatientFood(value) {
    this.patientMeals.push(value);
    this.objectChanged.patientMeals = this.patientMeals;
  }
}
