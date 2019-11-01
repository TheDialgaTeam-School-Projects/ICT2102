import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  Title,
  View,
} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {VitalsController} from '../../../controller/Patient/Vitals/Vitals';

export class VitalsView extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsController(this);
    this.state = {
      temperature: '',
      sys: '',
      dia: '',
      pulse: ''
    };

    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  render() {
    const vitals = this.state.patientModel
      ? this.state.patientModel.getPatientVitals()
      : null;

    return (
      <Container>
        <HeaderComponent headerTitle="Vitals" {...this.props} />
        <Grid>
          <Col style={{ height: '100%', ...GlobalCss.p2, ...GlobalCss.m2, ...GlobalCss.alignItemsCenter}}>
            <Text style={{ ...GlobalCss.fontSizeXXLarge }}>Last Reading Taken</Text>
            <Text style={{ ...GlobalCss.fontSizeLarge }} >Temperature: </Text>
            <Text style={{ ...GlobalCss.fontSizeLarge }} >{vitals ? vitals[vitals.length-1].temp : ''}&deg;C</Text>

            <Text></Text>

            <Text style={{ ...GlobalCss.fontSizeLarge }} >{'\n'}Blood Pressure: </Text>
            <Text style={{ ...GlobalCss.fontSizeLarge }} >SYS: {vitals ? vitals[vitals.length-1].sys : ''} mmHg</Text>
            <Text style={{ ...GlobalCss.fontSizeLarge }} >DIA: {vitals ? vitals[vitals.length-1].dia : ''} mmHg</Text>
            <Text style={{ ...GlobalCss.fontSizeLarge }} >PULSE: {vitals ? vitals[vitals.length-1].pulse : ''}/min</Text>
            <Button
              regular
              iconLeft
              style={{...GlobalCss.p2, ...GlobalCss.m2, ...GlobalCss.button}}
              onPress={this.controller.onPressVitalsHistory}>
              <Text style={GlobalCss.buttonIconLabel}>History</Text>
            </Button>
          </Col>
          <Col style={{ height: '100%', ...GlobalCss.p2, ...GlobalCss.m2, ...GlobalCss.justifyContentCenter}}>
            <Text style={{ ...GlobalCss.fontSizeXXLarge }}>Submit Reading</Text>
            <View style={GlobalCss.staffLoginContainer}>
              <Form>
                <Item inlineLabel>
                  <Label style={GlobalCss.formLabel}>Temperature:</Label>
                  <Input
                    style={GlobalCss.formInput}
                    placeholder="Temperature..."
                    autoCorrect={false}
                    onChangeText={(temperature) => this.setState({temperature})}
                  />
                </Item>
                <Item inlineLabel>
                  <Label style={GlobalCss.formLabel}>SYS:</Label>
                  <Input
                    style={GlobalCss.formInput}
                    placeholder="Systolic Blood Pressure..."
                    autoCorrect={false}
                    onChangeText={(sys) => this.setState({sys})}
                  />
                </Item>
                <Item inlineLabel>
                  <Label style={GlobalCss.formLabel}>DIA:</Label>
                  <Input
                    style={GlobalCss.formInput}
                    placeholder="Diastolic Blood Pressure..."
                    autoCorrect={false}
                    onChangeText={(dia) => this.setState({dia})}
                  />
                </Item>
                <Item inlineLabel>
                  <Label style={GlobalCss.formLabel}>Pulse:</Label>
                  <Input
                    style={GlobalCss.formInput}
                    placeholder="Pulse..."
                    autoCorrect={false}
                    onChangeText={(pulse) => this.setState({pulse})}
                  />
                </Item>
                <View padder />
              </Form>
              <Button
                  regular
                  iconLeft
                  style={GlobalCss.button}
                  onPress={this.controller.onPressAddReminder}>
                  <Text style={GlobalCss.buttonIconLabel}>Update</Text>
                </Button>
            </View>              
          </Col>
        </Grid>
      </Container>
    );
  }
}