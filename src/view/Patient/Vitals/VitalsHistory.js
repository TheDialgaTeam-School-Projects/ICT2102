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
    barPercentage: 0.5
  };

  tempGraphData = {
    labels: [],
    datasets: [{
      data: [],
      color: () => `rgba(134, 65, 244)`, // optional
      strokeWidth: 2 // optional
    }]
  }

  data2 = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 1 ],
      color: () => `rgba(134, 65, 244)`, // optional
      strokeWidth: 2 // optional
    }]
  }

  screenWidth = (Dimensions.get("window").width) / 2;
  screenHeight = (Dimensions.get("window").height) / 2;

  render() {
    this.tempGraphData.datasets[0].data = this.state.temperature;
    this.tempGraphData.labels = this.state.dateTime;

    return (
        <Container>
            <HeaderComponent headerTitle="VITALS HISTORY" {...this.props} />
            <Grid>
              <Col style={{ height: '100%'}, GlobalCss.alignItemsCenter}>
                <Text>TEMPERATURE GRAPH HERE</Text>
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
                <Text>BLOOD PRESSURE GRAPH HERE</Text>
                <LineChart
                  data = {this.data2}
                  width = {this.screenWidth}
                  height = {this.screenHeight}
                  chartConfig = {this.chartConfig}
                />
                <Button
                  regular
                  iconLeft
                  style={GlobalCss.button}
                  onPress={this.controller.onPressBackButton}>
                  <Text style={GlobalCss.buttonLabel}>Back</Text>
                </Button>
              </Col>
            </Grid>
        </Container>
    )};
}
