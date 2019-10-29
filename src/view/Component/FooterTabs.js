import React, {Component} from 'react';
import {Keyboard, Platform} from 'react-native';
import {Button, Footer, FooterTab, Text} from 'native-base';
import {FooterTabComponentController} from '../../controller/Component/FooterTabComponent';
import {GlobalCSS} from '../../css/Global';

export class FooterTabComponent extends Component {
  constructor(props) {
    super(props);
    this.controller = new FooterTabComponentController(this);
    this.keyboardDidShowEvent = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      this.controller.keyboardDidShow,
    );
    this.keyboardDidHideEvent = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      this.controller.keyboardDidHide,
    );
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.keyboardDidShowEvent.remove();
    this.keyboardDidHideEvent.remove();
  }

  render() {
    if (this.state.keyboardUp) {
      return null;
    }

    return (
      <Footer>
        <FooterTab>
          {this.props.navigation.state.routes.map((route, index) => {
            return (
              <Button
                key={index}
                style={
                  this.props.navigation.state.index === index
                    ? GlobalCSS.footerTabSelected
                    : GlobalCSS.footerTab
                }
                disabled={this.props.navigation.state.index === index}
                onPress={() => {
                  this.props.navigation.navigate(route.routeName);
                }}>
                <Text style={GlobalCSS.footerTabLabel}>
                  {this.props
                    .getLabelText({route: route})
                    .split(/(?=[A-Z])/)
                    .join(' ')}
                </Text>
              </Button>
            );
          })}
        </FooterTab>
      </Footer>
    );
  }
}
