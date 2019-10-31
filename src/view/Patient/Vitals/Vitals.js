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
  }

  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="Vitals" {...this.props} />
        <Grid>
          <Col style={{ height: '100%'}, GlobalCss.alignItemsCenter}>
            <Text>Last Reading Taken</Text>
            <Text>Temperature: </Text>
            <Text>36&deg;C</Text>
            
            <Text>{'\n'}Blood Pressure: </Text>
            <Text>SYS: 110 mmHg</Text>
            <Text>DIA: 67 mmHg</Text>
            <Text>PULSE: 68/min</Text>
            <Button
              regular
              iconLeft
              style={GlobalCss.button}
              onPress={this.controller.onPressVitalsHistory}>
              <Text style={GlobalCss.buttonIconLabel}>History</Text>
            </Button>
          </Col>
          <Col style={{ height: '100%'}, GlobalCss.alignItemsCenter}>
            <Text>Submit Reading</Text>
              <Text>{'\n'}Temperature:</Text>
              <Item regular>
                <Input placeholder='Temperature'
                onChangeText={(temperature) => this.setState({temperature})}
                />
                <Text>&deg;C</Text>
              </Item>
              <Text>SYS: </Text>
              <Item regular>
                <Input placeholder='Systolic Blood Pressure' 
                onChangeText={(sys) => this.setState({sys})}
                />
                <Text>/mmHg</Text>
              </Item>
              <Text>DIA: </Text>
              <Item regular>
                <Input placeholder='Diastolic Blood Pressure' 
                onChangeText={(dia) => this.setState({dia})}
                />
                <Text>/mmHg</Text>
              </Item>
              <Text>Pulse: </Text>
              <Item regular>
                <Input placeholder='Pulse' 
                onChangeText={(pulse) => this.setState({pulse})}
                />
                <Text>/min</Text>
              </Item>
              <Button
                regular
                iconLeft
                style={GlobalCss.button}
                onPress={this.controller.onPressAddReminder}>
                <Text style={GlobalCss.buttonIconLabel}>Update</Text>
              </Button>
          </Col>
        </Grid>
      </Container>
    );
  }
}