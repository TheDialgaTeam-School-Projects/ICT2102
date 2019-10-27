import React, {Component} from 'react';
import {Body, Header, Left, Right, Title} from 'native-base';
import {GlobalCSS} from '../../css/Global';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.props.titleText = '';
  }

  render() {
    let headerStyle = {
      ...GlobalCSS.header,
      ...this.props.style,
    };

    return (
      <Header style={headerStyle}>
        <Left />
        <Body>
          <Title>{this.props.titleText ?? ''}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
