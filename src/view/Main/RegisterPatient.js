import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
import {GlobalCSS} from '../../css/Global';
import {CustomHeaderComponent} from '../Component/CustomHeader';

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
    const css = StyleSheet.create({
      centerContainer: {
        flex: 1,
        justifyContent: 'center',
      },
    });

    return (
      <Container>
        <CustomHeaderComponent headerTitle="REGISTER PATIENT" {...this.props} />
        <View style={css.centerContainer}>
          <Form>
            <Item inlineLabel>
              <Label style={GlobalCSS.formLabel}>Enter/Scan Patient ID:</Label>
              <Input
                style={GlobalCSS.formInput}
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
                    style={GlobalCSS.button}
                    onPress={this.controller.onPressBackButton}>
                    <Text style={GlobalCSS.buttonLabel}>Back</Text>
                  </Button>
                </Col>
                <Col size={1} />
                <Col size={1}>
                  <Button
                    style={GlobalCSS.button}
                    onPress={this.controller.onPressSubmitButton}>
                    <Text style={GlobalCSS.buttonLabel}>Submit</Text>
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
