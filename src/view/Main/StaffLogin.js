import React, {Component} from 'react';
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
import {HeaderComponent} from '../Component/Header';
import {LoadingModalComponent} from '../Component/LoadingModal';
import {LoginScreenController} from '../../controller/Main/StaffLogin';
import {GlobalCss} from '../../css/GlobalCss';

export class StaffLoginView extends Component {
  constructor(props) {
    super(props);
    this.controller = new LoginScreenController(this);
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
        <HeaderComponent headerTitle="Staff Login" {...this.props} />
        <View style={GlobalCss.staffLoginContainer}>
          <Form>
            <Item inlineLabel>
              <Label style={GlobalCss.formLabel}>Staff Id:</Label>
              <Input
                style={GlobalCss.formInput}
                placeholder="Enter Staff Id..."
                autoCorrect={false}
                autoCompleteType="username"
                textContentType="username"
                onChangeText={this.controller.onChangeTextStaffIdInput}
                autoFocus={true}
              />
            </Item>
            <Item inlineLabel>
              <Label style={GlobalCss.formLabel}>Password:</Label>
              <Input
                style={GlobalCss.formInput}
                placeholder="Enter Password..."
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
                    style={GlobalCss.button}
                    onPress={this.controller.onPressBackButton}>
                    <Text style={GlobalCss.buttonLabel}>Back</Text>
                  </Button>
                </Col>
                <Col size={1} />
                <Col size={1}>
                  <Button
                    style={GlobalCss.button}
                    onPress={this.controller.onPressLoginButton}>
                    <Text style={GlobalCss.buttonLabel}>Login</Text>
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
