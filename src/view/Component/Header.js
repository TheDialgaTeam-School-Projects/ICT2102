import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Header, View} from 'native-base';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const css = StyleSheet.create({
      safeArea: {
        marginTop: StatusBar.currentHeight,
      },
    });

    if (this.props?.hasHeader ?? true) {
      return <Header transparent />;
    } else {
      return <View style={css.safeArea} />;
    }
  }
}
