import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
  Title,
  View,
} from 'native-base';
import {GlobalCSS} from '../../css/Global';

export class RemindersView extends Component {
  render() {
    const css = StyleSheet.create({
      loggedInAsLabel: {
        padding: 5,
      },
    });

    return (
      <Container>
        <View style={GlobalCSS.header}>
          <Grid>
            <Col size={3} />
            <Col size={3}>
              <Title style={GlobalCSS.headerTitle}>REMINDERS</Title>
            </Col>
            <Col size={1} />
            <Col size={1} />
            <Col size={1}>
              <Row>
                <Text style={css.loggedInAsLabel}>Logged in as ???</Text>
              </Row>
              <Row>
                <Button small rounded bordered style={GlobalCSS.buttonAlt}>
                  <Text style={GlobalCSS.buttonLabel}>Logout</Text>
                </Button>
              </Row>
            </Col>
          </Grid>
        </View>
      </Container>
    );
  }
}
