import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
import {Col, Grid, Row} from 'react-native-easy-grid';
import {LoadingModalComponent} from '../Component/LoadingModal';
import {LoginScreenController} from '../../controller/Main/StaffLogin';
import {GlobalCSS} from '../../css/Global';

export class StaffLoginView extends Component {
  constructor(props) {
    super(props);
    this.controller = new LoginScreenController(this);
    this.didFocusEvent = this.props.navigation.addListener(
      'didFocus',
      this.controller.didFocus,
    );
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.didFocusEvent.remove();
  }

  render() {
    const css = StyleSheet.create({
      centerContainer: {
        flex: 1,
        justifyContent: 'center',
      },
    });

    return (
      <Container style={css.centerContainer}>
        <Form>
          <Item fixedLabel>
            <Label style={GlobalCSS.formLabel}>Staff Id:</Label>
            <Input
              style={GlobalCSS.formInput}
              placeholder="Staff Id..."
              autoCorrect={false}
              autoCompleteType="username"
              textContentType="username"
              onChangeText={this.controller.onChangeTextStaffIdInput}
              autoFocus={true}
            />
          </Item>
          <Item fixedLabel>
            <Label style={GlobalCSS.formLabel}>Password:</Label>
            <Input
              style={GlobalCSS.formInput}
              placeholder="Password..."
              autoCorrect={false}
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={this.controller.onChangeTextPasswordInput}
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
                  onPress={this.controller.onPressLoginButton}>
                  <Text style={GlobalCSS.buttonLabel}>Login</Text>
                </Button>
              </Col>
              <Col size={1} />
            </Row>
          </Grid>
        </Form>
        <LoadingModalComponent visible={this.state.isLoading} />
      </Container>
    );
  }
}
