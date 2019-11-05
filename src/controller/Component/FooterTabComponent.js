import {Controller} from '../Controller';

export class FooterTabComponentController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {keyboardUp: false};
  }

  /**
   * This event triggers when the keyboard did show.
   */
  keyboardDidShow() {
    this.state = {keyboardUp: true};
  }

  /**
   * This event triggers when the keyboard did hide.
   */
  keyboardDidHide() {
    this.state = {keyboardUp: false};
  }
}
