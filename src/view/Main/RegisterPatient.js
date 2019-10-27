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
  Title,
  View,
} from 'native-base';
import {LoadingModalComponent} from '../Component/LoadingModal';
import {RegisterPatientController} from '../../controller/Main/RegisterPatient';
import {GlobalCSS} from '../../css/Global';

export class RegisterPatientView extends Component {
  constructor(props) {
    super(props);
    this.controller = new RegisterPatientController(this);
    this.props.navigation.addListener('didFocus', this.controller.didFocus);
  }

  componentDidMount() {
    this.controller.componentDidMount();
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
        <View style={GlobalCSS.header}>
          <Grid>
            <Row>
              <Col />
              <Col>
                <Title style={GlobalCSS.headerTitle}>REGISTER PATIENT</Title>
              </Col>
              <Col />
            </Row>
          </Grid>
        </View>
        <View style={css.centerContainer}>
          <Form>
            <Item fixedLabel>
              <Label>Enter/Scan Patient ID:</Label>
              <Input
                placeholder="Patient ID..."
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
