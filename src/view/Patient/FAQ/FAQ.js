import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Container,
  Header,
  Button,
  Content,
  Icon,
  Text,
  View,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import {HeaderComponent} from '../../Component/Header';
import {GlobalCss} from '../../../css/GlobalCss';

export class FAQView extends Component {
  constructor(props) {
    super(props);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
    this.state = {
      toggledisplay: 'Subjective',
    };
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  onSubjectiveButtonPress = () => {
    this.setState({
      toggledisplay: 'Subjective',
    });
  };

  onObjectiveButtonPress = () => {
    this.setState({
      toggledisplay: 'Objective',
    });
  };

  onAssessmentButtonPress = () => {
    this.setState({
      toggledisplay: 'Assessment',
    });
  };

  onPlanButtonPress = () => {
    this.setState({
      toggledisplay: 'Plan',
    });
  };

  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="FAQ" {...this.props} />
        <View padder />
        <Grid />
      </Container>
    );
  }
}
