import React, {Component} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
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
          <ActivityIndicator size="large" color="#0000FF" />
        </View>
      </Modal>
    );
  }
}
