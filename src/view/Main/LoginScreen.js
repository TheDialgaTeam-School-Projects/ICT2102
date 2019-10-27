import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Container, Form, Input, Item, Label, Text} from 'native-base';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {LoadingModalComponent} from '../Component/LoadingModal';
import {LoginScreenController} from '../../controller/Main/LoginScreen';
import {GlobalCSS} from '../../css/Global';

export class LoginScreenView extends Component {
  constructor(props) {
    super(props);
    this.controller = new LoginScreenController(this);
    this.props.navigation.addListener('didFocus', this.controller.didFocus);
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  render() {
    return (
      <Container>
        <Form>
          <Item fixedLabel>
            <Label>User ID:</Label>
            <Input
              placeholder="User ID..."
              autoCorrect={false}
              autoCompleteType="username"
              textContentType="username"
              onChangeText={this.controller.onChangeTextUserIdLabel}
              autoFocus={true}
            />
          </Item>
          <Item fixedLabel>
            <Label>Password:</Label>
            <Input
              placeholder="Password..."
              autoCorrect={false}
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={this.controller.onChangeTextPasswordLabel}
            />
          </Item>
          <View style={GlobalCSS.Separator} />
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
