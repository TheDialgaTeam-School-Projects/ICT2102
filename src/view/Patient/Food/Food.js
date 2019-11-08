import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import RadioGroup from 'react-native-radio-buttons-group';
import {Button, Container, Text} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {FoodController} from '../../../controller/Patient/Food/Food';

export class FoodView extends Component {
  constructor(props) {
    super(props);
    this.controller = new FoodController(this);
    this.state = {
      bFastSelected: '',
      lunchSelected: '',
      dinnerSelected: '',
      bFastData: [
        {
          label: 'Bread',
          value: 'Bread',
        },
        {
          label: 'Pancakes',
          value: 'Pancakes',
        },
      ],
      lunchData: [
        {
          label: 'Chicken Rice',
          value: 'Chicken Rice',
        },
        {
          label: 'Vegetarian Meal',
          value: 'Vegetarian Meal',
        },
      ],
      dinnerData: [
        {
          label: 'Chicken Chop',
          value: 'Chicken Chop',
        },
        {
          label: 'Vegetarian Meal',
          value: 'Vegetarian Meal',
        },
      ],
    };
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  onBFSel = bFastData => this.setState({bFastData});
  onLunchSel = lunchData => this.setState({lunchData});
  onDinnerSel = dinnerData => this.setState({dinnerData});

  getBfast(data) {
    let selectedButton = this.state.bFastData.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.bFastData[0].label;
    return selectedButton;
  }
  getLunch(data) {
    let selectedButton = this.state.lunchData.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.lunchData[0].label;
    return selectedButton;
  }
  getDinner(data) {
    let selectedButton = this.state.dinnerData.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.dinnerData[0].label;
    return selectedButton;
  }

  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="SELECT FOOD" {...this.props} />
        <Grid>
          <Row>
            <Col style={{height: '100%', ...GlobalCss.alignItemsFlexStart}}>
              <Text style={{textDecorationLine: 'underline', fontSize: 40}}>
                Breakfast
              </Text>
              <RadioGroup
                radioButtons={this.state.bFastData}
                onPress={bFastData => this.setState({bFastData})}
                style={{}}
                labelStyle={{fontSize: 14}}
              />
            </Col>
            <Col style={{height: '100%', ...GlobalCss.alignItemsFlexStart}}>
              <Text style={{textDecorationLine: 'underline', fontSize: 40}}>
                Lunch
              </Text>
              <RadioGroup
                radioButtons={this.state.lunchData}
                onPress={this.onLunchSel}
                style={{fontSize: 20}}
                labelStyle={{fontSize: 20}}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{height: '100%', ...GlobalCss.alignItemsFlexStart}}>
              <Text style={{textDecorationLine: 'underline', fontSize: 40}}>
                Dinner
              </Text>
              <RadioGroup
                radioButtons={this.state.dinnerData}
                onPress={this.onDinnerSel}
                style={{}}
                labelStyle={{fontSize: 20}}
              />
              <Button
                regular
                iconLeft
                style={
                  (GlobalCss.button,
                  {position: 'absolute', bottom: '10%', right: '3%'})
                }
                onPress={this.controller.onPressUpdateButton}>
                <Text style={GlobalCss.buttonIconLabel}>Update</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
