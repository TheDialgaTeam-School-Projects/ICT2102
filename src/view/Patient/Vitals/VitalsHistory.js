import React, {Component} from 'react';
import {Dimensions} from 'react-native';
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
import {GlobalCSS} from '../../../css/Global';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {VitalsHistoryController} from '../../../controller/Patient/Vitals/VitalsHistory';

export class VitalsHistoryView extends Component {
  constructor(props) {
    super(props);
    this.controller = new VitalsHistoryController(this);
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

  data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ],
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
    return (
        <Container>
            <CustomHeaderComponent headerTitle="VITALS HISTORY" {...this.props} />
            <Grid>
              <Col style={{ height: '100%'}, GlobalCSS.alignItemsCenter}>
                <Text>TEMPERATURE GRAPH HERE</Text>
                <View>
                  <LineChart
                    data = {this.data1}
                    width = {this.screenWidth}
                    height = {this.screenHeight}
                    chartConfig = {this.chartConfig}
                  />
                </View>
              </Col>
              <Col style={{ height: '100%'}, GlobalCSS.alignItemsCenter}>
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
                  style={GlobalCSS.button}
                  onPress={this.controller.onPressBackButton}>
                  <Text style={GlobalCSS.buttonLabel}>Back</Text>
                </Button>
              </Col>
            </Grid>
        </Container>
    )};
}
