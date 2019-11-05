import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Container, Header, Button, Content, Icon, Text, View, List, ListItem, Left, Right } from 'native-base';
import { HeaderComponent } from '../../Component/Header';
import { CaseNotesController } from '../../../controller/Patient/CaseNotes/CaseNotes';
import { GlobalCss } from '../../../css/GlobalCss';

export class CaseNotesView extends Component {
  constructor(props) {
    super(props);
    this.controller = new CaseNotesController(this);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
    this.state = ({
      toggledisplay: "Subjective",
    });
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  onSubjectiveButtonPress = () => {
    this.setState({
      toggledisplay: "Subjective"
    });
  }


  onObjectiveButtonPress = () => {
    this.setState({
      toggledisplay: "Objective"
    });
  }

  onAssessmentButtonPress = () => {
    this.setState({
      toggledisplay: "Assessment"
    });
  }

  onPlanButtonPress = () => {
    this.setState({
      toggledisplay: "Plan"
    });
  }

  render() {
    const reminders = this.state.patient
      ? this.state.patient.patientReminders
      : [];

    if (this.state.toggledisplay == "Subjective") {
      return (
        <Container>
          <HeaderComponent headerTitle="CASE NOTES" {...this.props} />
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
                      <Button iconRight light width={150} onPress={this.onSubjectiveButtonPress}>
                        <Text>Subjective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onObjectiveButtonPress}>
                        <Text>Objective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onAssessmentButtonPress}>
                        <Text>Assessment</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onPlanButtonPress}>
                        <Text>Plan</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col size={4} style={GlobalCss.mr1}>
                
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == "Objective") {
      return (
        <Container>
          <HeaderComponent headerTitle="CASE NOTES" {...this.props} />
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
                      <Button iconRight light width={150} onPress={this.onSubjectiveButtonPress}>
                        <Text>Subjective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onObjectiveButtonPress}>
                        <Text>Objective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onAssessmentButtonPress}>
                        <Text>Assessment</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onPlanButtonPress}>
                        <Text>Plan</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col size={4} style={GlobalCss.mr1}>
                <Text>Objective</Text>
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == "Assessment") {
      return (
        <Container>
          <HeaderComponent headerTitle="CASE NOTES" {...this.props} />
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
                      <Button iconRight light width={150} onPress={this.onSubjectiveButtonPress}>
                        <Text>Subjective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onObjectiveButtonPress}>
                        <Text>Objective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onAssessmentButtonPress}>
                        <Text>Assessment</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onPlanButtonPress}>
                        <Text>Plan</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col size={4} style={GlobalCss.mr1}>
                <Text>Assessment</Text>
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == "Plan") {
      return (
        <Container>
          <HeaderComponent headerTitle="CASE NOTES" {...this.props} />
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
                      <Button iconRight light width={150} onPress={this.onSubjectiveButtonPress}>
                        <Text>Subjective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onObjectiveButtonPress}>
                        <Text>Objective</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onAssessmentButtonPress}>
                        <Text>Assessment</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider>
                    </ListItem>
                    <ListItem>
                      <Button iconRight light width={150} onPress={this.onPlanButtonPress}>
                        <Text>Plan</Text>
                        <Icon name='arrow-forward' />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col size={4} style={GlobalCss.mr1}>
                <Text>Plan</Text>
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
  }
}
