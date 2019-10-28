import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Button, Icon, Text, View} from 'native-base';
import {GlobalCSS} from '../../css/Global';
import {CustomHeaderController} from '../../controller/Component/CustomHeader';

export class CustomHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.controller = new CustomHeaderController(this);
    this.didFocusEvent = this.props.navigation.addListener(
      'didFocus',
      this.controller.didFocus,
    );
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.didFocusEvent.remove();
  }

  render() {
    const leftHeader = this.state.patient ? (
      <Row style={GlobalCSS.alignItemsCenter}>
        <Col style={GlobalCSS.pl2}>
          <Text style={GlobalCSS.headerLeftText}>
            {this.state.patient.patientName}
          </Text>
          <Text style={GlobalCSS.headerLeftText}>{'Bed 01'}</Text>
        </Col>
      </Row>
    ) : null;

    const patientButton = this.state.patient ? (
      <Button rounded bordered style={GlobalCSS.buttonHeader}>
        <Icon type="FontAwesome5" name="user" />
      </Button>
    ) : null;

    const rightHeader = this.state.staff ? (
      <Row style={GlobalCSS.alignItemsCenter}>
        <Col style={GlobalCSS.alignItemsBottom}>{patientButton}</Col>
        <Col style={GlobalCSS.p2}>
          <Text style={{...GlobalCSS.pb1, ...GlobalCSS.headerRightText}}>
            {`Logged in as\n${this.state.staff.staffName}`}
          </Text>
          <Button
            small
            rounded
            bordered
            style={GlobalCSS.buttonHeader}
            onPress={this.controller.onPressLogoutButton}>
            <Text style={GlobalCSS.buttonHeaderLabel}>Logout</Text>
          </Button>
        </Col>
      </Row>
    ) : null;

    return (
      <View style={GlobalCSS.header}>
        <Grid style={{...GlobalCSS.alignItemsCenter, ...GlobalCSS.header}}>
          <Col>{leftHeader}</Col>
          <Col style={GlobalCSS.alignItemsCenter}>
            <Text style={GlobalCSS.headerTitle}>{this.props.headerTitle}</Text>
          </Col>
          <Col>{rightHeader}</Col>
        </Grid>
      </View>
    );
  }
}
