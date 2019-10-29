import {Controller} from '../Controller';

export class FooterTabComponentController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }

  componentDidMount() {
    this.state = {keyboardUp: false};
  }

  keyboardDidShow() {
    this.state = {keyboardUp: true};
  }

  keyboardDidHide() {
    this.state = {keyboardUp: false};
  }
}
