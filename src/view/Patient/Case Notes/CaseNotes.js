import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Button, Container, Content, Icon, Text, View, List, ListItem,Left, Right,Header} from 'native-base';
import { CustomHeaderComponent } from '../../Component/CustomHeader';
import { CaseNotesComponent } from './CaseNotesComponent';
import { CaseNotesController } from '../../../controller/Patient/Case Notes/CaseNotes';
import { GlobalCSS } from '../../../css/Global';

export class CaseNotesView extends Component {
  constructor(props) {
    super(props);
    this.controller = new CaseNotesController(this);
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
    const reminders = this.state.patient
      ? this.state.patient.patientReminders
      : [];

    return (
      <Container>
        <CustomHeaderComponent headerTitle="CASE NOTES" {...this.props} />
        <View padder />
        <Grid>
          <Row size={11}>
            <Col size={1}>
              <Content>
                <List>
                  <Header>
                    <Text>Click Here For More:</Text>
                  </Header>
                  <ListItem itemDivider>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Subjective</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem itemDivider>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Objective</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem itemDivider>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Assessment</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem itemDivider>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Plan</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </Col>
            <Col size={4} style={GlobalCSS.mr1}>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
