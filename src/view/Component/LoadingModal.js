import React, {Component} from 'react';
import {Modal} from 'react-native';
import {Spinner, View} from 'native-base';
import {GlobalCSS} from '../../css/Global';

export class LoadingModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}>
        <View style={GlobalCSS.loadingContainer}>
          <Spinner color="blue" />
        </View>
      </Modal>
    );
  }
}
