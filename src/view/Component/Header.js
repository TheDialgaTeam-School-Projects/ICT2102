import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Button, Icon, Text, View} from 'native-base';
import {GlobalCss} from '../../css/GlobalCss';
import {HeaderController} from '../../controller/Component/Header';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.controller = new HeaderController(this);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  render() {
    const leftHeader = this.state.patientModel ? (
      <Row style={GlobalCss.alignItemsCenter}>
        <Col style={GlobalCss.pl2}>
          <Text style={GlobalCss.headerLeftText}>
            {this.state.patientModel.getPatientName()}
          </Text>
          <Text style={GlobalCss.headerLeftText}>{'Bed 01'}</Text>
        </Col>
      </Row>
    ) : null;

    const patientButton = this.state.patientModel ? (
      <Button rounded bordered style={GlobalCss.buttonHeader}>
        <Icon type="FontAwesome5" name="user" />
      </Button>
    ) : null;

    const rightHeader = this.state.staffModel ? (
      <Row style={GlobalCss.alignItemsCenter}>
        <Col style={GlobalCss.alignItemsFlexEnd}>{patientButton}</Col>
        <Col style={GlobalCss.p2}>
          <Text style={{...GlobalCss.pb1, ...GlobalCss.headerRightText}}>
            {`Logged in as\n${this.state.staffModel.getStaffName()}`}
          </Text>
          <Button
            small
            rounded
            bordered
            style={GlobalCss.buttonHeader}
            onPress={this.controller.onPressLogoutButton}>
            <Text style={GlobalCss.buttonHeaderLabel}>Logout</Text>
          </Button>
        </Col>
      </Row>
    ) : null;

    return (
      <View style={GlobalCss.header}>
        <Grid style={{...GlobalCss.alignItemsCenter, ...GlobalCss.header}}>
          <Col size={1}>{leftHeader}</Col>
          <Col size={2} style={GlobalCss.alignItemsCenter}>
            <Text uppercase style={GlobalCss.headerTitle}>
              {this.props.headerTitle}
            </Text>
          </Col>
          <Col size={1}>{rightHeader}</Col>
        </Grid>
      </View>
    );
  }
}
