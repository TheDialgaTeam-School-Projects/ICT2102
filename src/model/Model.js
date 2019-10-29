export class Model {
  constructor() {
    this.toJson = this.toJson.bind(this);
    this.toJsonObj = this.toJsonObj.bind(this);
  }

  /**
   * Return json string representation of the model.
   * @returns {string}
   */
  toJson() {
    return JSON.stringify(this);
  }

  /**
   * Return json object representation of the model.
   * @returns object
   */
  toJsonObj() {
    return JSON.parse(this.toJson());
  }
}
