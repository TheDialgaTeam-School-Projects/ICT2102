import {Model} from './Model';

export class StaffModel extends Model {
  constructor(docId, jsonObj) {
    super('staffs', docId, 'staffInformation');
    this.staffId = jsonObj?.staffId ?? '';
    this.staffName = jsonObj?.staffName ?? '';
    this.staffPassword = jsonObj?.staffPassword ?? '';

    this.getStaffId = this.getStaffId.bind(this);
    this.setStaffId = this.setStaffId.bind(this);
    this.getStaffName = this.getStaffName.bind(this);
    this.setStaffName = this.setStaffName.bind(this);
    this.getStaffPassword = this.getStaffPassword.bind(this);
    this.setStaffPassword = this.setStaffPassword.bind(this);
  }

  /**
   * Create staffModel model.
   * @param jsonObj Object to create.
   * @returns {StaffModel}
   */
  static createModel(jsonObj) {
    return new StaffModel(jsonObj?.docId, jsonObj);
  }

  /**
   * Get staffModel id.
   * @returns {string}
   */
  getStaffId() {
    return this.staffId;
  }

  /**
   * Set staffModel id.
   * @param value Staff id to update.
   */
  setStaffId(value) {
    this.staffId = value;
    this.objectChanged.staffId = value;
  }

  /**
   * Get staffModel name.
   * @returns {string}
   */
  getStaffName() {
    return this.staffName;
  }

  /**
   * Set staffModel name.
   * @param value Staff name to update.
   */
  setStaffName(value) {
    this.staffName = value;
    this.objectChanged.staffName = value;
  }

  /**
   * get staffModel password.
   * @returns {string}
   */
  getStaffPassword() {
    return this.staffPassword;
  }

  /**
   * Set staffModel password.
   * @param value Staff password to update.
   */
  setStaffPassword(value) {
    this.staffPassword = value;
    this.objectChanged.staffPassword = value;
  }
}
