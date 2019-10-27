import {Model} from './Model';

export class StaffModel extends Model {
  constructor(jsonObj) {
    super();
    this.staffId = jsonObj?.staffId ?? '';
    this.staffName = jsonObj?.staffName ?? '';
    this.staffPassword = jsonObj?.staffPassword ?? '';
  }

  /**
   * Create a new staff model.
   * @param jsonObj Json object data for creation.
   * @returns {StaffModel}
   */
  static createModel(jsonObj) {
    return new StaffModel(jsonObj);
  }
}
