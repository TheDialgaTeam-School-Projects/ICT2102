import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {View} from 'native-base';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const css = StyleSheet.create({
      safeArea: {
        marginTop: this.props.useSafeArea ? StatusBar.currentHeight : 0,
      },
    });

    return <View style={css.safeArea} />;
  }
}
