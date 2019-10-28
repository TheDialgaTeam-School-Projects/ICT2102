import React, {Component} from 'react';
import {Button, Footer, FooterTab, Text} from 'native-base';
import {GlobalCSS} from '../../css/Global';

export class FooterTabComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
