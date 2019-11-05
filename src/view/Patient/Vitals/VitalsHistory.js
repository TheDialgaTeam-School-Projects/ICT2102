import React, {Component} from 'react';
import {Dimensions, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {LineChart} from "react-native-chart-kit";
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {VitalsHistoryController} from '../../../controller/Patient/Vitals/VitalsHistory';

export class VitalsHistoryView extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsHistoryController(this);
    this.state = {
      temperature: [0],
      dateTime: [0],
      sys: [0],
      dia: [0],
      pulse: [0],
    };
    this.willFocusEvent = this.props.navigation.addListener('willFocus', this.controller.willFocus);
  }

  chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    propsForLabels: { fontSize: 17 }
  };

  tempGraphData = {
    labels: [],
    datasets: [{
      data: [],
      color: () => `rgba(134, 65, 244)`, // optional
      strokeWidth: 2 // optional
    }]
  }

  bpGraphData = {
    labels: [],
    datasets: [
      {
        data: [],
        color: () => `rgba(134, 65, 244)`, // optional
        strokeWidth: 2 // optional
      },
      {
        data: [],
        color: () => `rgba(0,128,0,1)`, // optional
        strokeWidth: 2 // optional
      },
      {
        data: [],
        color: () => `rgba(255, 0, 0, 1)`, // optional
        strokeWidth: 2 // optional
      }
    ]
  }

  screenWidth = (Dimensions.get("window").width) / 2;
  screenHeight = (Dimensions.get("window").height) / 2;

  render() {
    this.tempGraphData.datasets[0].data = this.state.temperature;
    this.tempGraphData.labels = this.state.dateTime;

    this.bpGraphData.datasets[0].data = this.state.sys;
    this.bpGraphData.datasets[1].data = this.state.dia;
    this.bpGraphData.datasets[2].data = this.state.pulse;
    this.bpGraphData.labels = this.state.dateTime;

    return (
        <Container>
            <HeaderComponent headerTitle="VITALS HISTORY" {...this.props} />
            <Grid>
              <Col style={{ height: '100%'}, GlobalCss.alignItemsCenter}>
                <Text>10 Latest Temperature Reading</Text>
                <View>
                  <LineChart
                    data = {this.tempGraphData}
                    width = {this.screenWidth}
                    height = {this.screenHeight}
                    chartConfig = {this.chartConfig}
                  />
                </View>
              </Col>
              <Col style={{ height: '100%'}, GlobalCss.alignItemsCenter}>
                <Text>10 Latest Blood Pressure Reading</Text>
                <LineChart
                  data = {this.bpGraphData}
                  width = {this.screenWidth}
                  height = {this.screenHeight}
                  chartConfig = {this.chartConfig}
                />
                <Text style={{color: 'green'}}>Systolic</Text>
                <Text style={{color: 'blue'}}>Diabolic</Text>
                <Text style={{color: 'red'}}>Pulse</Text>
                <View padder />
                <View style={{ ...GlobalCss.alignItemsCenter }}>
                  <Button
                    regular
                    iconLeft
                    style={GlobalCss.button}
                    onPress={this.controller.onPressBackButton}>
                    <Text style={GlobalCss.buttonLabel}>Back</Text>
                  </Button>
                </View>
              </Col>
            </Grid>
        </Container>
    )};
}
