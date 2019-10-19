export default class Controller {
  constructor(view) {
    /*******************************************************************************************************************
     * Important:
     * Please remember to bind your functions to preserve the object state to this class.
     * Otherwise, it would use the object state where it is called which can be undesirable.
     ******************************************************************************************************************/
    this.view = view;
    this.view.state = {};
    this.getParam = this.getParam.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  /**
   * Get the properties of the current view.
   * @return Object Property object.
   */
  get props() {
    return this.view.props;
  }

  /**
   * Get the state of the current view.
   * @return Object State object.
   */
  get state() {
    return this.view.state;
  }

  /**
   * Set the state of the current view.
   * @param stateObj Next partial state or function to produce next partial state to be merged with current state.
   */
  set state(stateObj) {
    this.view.setState(stateObj);
  }

  /**
   * Get the parameter of the current view.
   * @param param Parameter name to get.
   * @param fallback Fallback value if parameter does not exist.
   */
  getParam(param, fallback) {
    return this.props.navigation.getParam(param, fallback);
  }

  /**
   * Navigate into the selected screen with parameters.
   * @param routeName The name of the route.
   * @param params Additional params given to the route.
   */
  navigate(routeName, params) {
    this.props.navigation.navigate(routeName, params);
  }
}
