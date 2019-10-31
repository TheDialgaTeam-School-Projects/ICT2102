import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
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
import {LoadingModalComponent} from '../Component/LoadingModal';
import {RegisterPatientController} from '../../controller/Main/RegisterPatient';
import {GlobalCss} from '../../css/GlobalCss';
import {HeaderComponent} from '../Component/Header';

export class RegisterPatientView extends Component {
  constructor(props) {
    super(props);
    this.controller = new RegisterPatientController(this);
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
    return (
      <Container>
        <HeaderComponent headerTitle="Register Patient" {...this.props} />
        <View style={GlobalCss.registerPatientContainer}>
          <Form>
            <Item inlineLabel>
              <Label style={GlobalCss.formLabel}>Enter/Scan Patient ID:</Label>
              <Input
                style={GlobalCss.formInput}
                placeholder="Enter Patient ID..."
                autoCorrect={false}
                onChangeText={this.controller.onChangeTextPatientIdInput}
                autoFocus={true}
              />
            </Item>
            <View padder />
            <Grid>
              <Row>
                <Col size={1} />
                <Col size={1}>
                  <Button
                    style={GlobalCss.button}
                    onPress={this.controller.onPressBackButton}>
                    <Text style={GlobalCss.buttonLabel}>Back</Text>
                  </Button>
                </Col>
                <Col size={1} />
                <Col size={1}>
                  <Button
                    style={GlobalCss.button}
                    onPress={this.controller.onPressSubmitButton}>
                    <Text style={GlobalCss.buttonLabel}>Submit</Text>
                  </Button>
                </Col>
                <Col size={1} />
              </Row>
            </Grid>
          </Form>
        </View>
        <LoadingModalComponent visible={this.state.isLoading} />
      </Container>
    );
  }
}
