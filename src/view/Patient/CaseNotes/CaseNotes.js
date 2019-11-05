import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Container,
  Header,
  Button,
  Content,
  Icon,
  Text,
  View,
  List,
  ListItem,
} from 'native-base';
import {HeaderComponent} from '../../Component/Header';
import {CaseNotesController} from '../../../controller/Patient/CaseNotes/CaseNotes';
import {GlobalCss} from '../../../css/GlobalCss';

export class CaseNotesView extends Component {
  constructor(props) {
    super(props);
    this.controller = new CaseNotesController(this);
    this.willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.controller.willFocus,
    );
    this.state = {
      toggledisplay: 'Subjective',
    };
  }

  componentDidMount() {
    this.controller.componentDidMount();
  }

  componentWillUnmount() {
    this.willFocusEvent.remove();
  }

  onSubjectiveButtonPress = () => {
    this.setState({
      toggledisplay: 'Subjective',
    });
  };

  onObjectiveButtonPress = () => {
    this.setState({
      toggledisplay: 'Objective',
    });
  };

  onAssessmentButtonPress = () => {
    this.setState({
      toggledisplay: 'Assessment',
    });
  };

  onPlanButtonPress = () => {
    this.setState({
      toggledisplay: 'Plan',
    });
  };

  render() {
    const casenotes = this.state.patient
      ? this.state.patient.getPatientCaseNotes()
      : null;

    if (this.state.toggledisplay == 'Subjective') {
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
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onSubjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Subjective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onObjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Objective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onAssessmentButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Assessment</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onPlanButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Plan</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col
                size={4}
                style={{
                  ...GlobalCss.mr1,
                  ...GlobalCss.alignItemsCenter,
                  ...GlobalCss.alignItemsFlexStart,
                  ...GlobalCss.pl1,
                }}>
                {casenotes ? (
                  casenotes.Subjective.map((value, index) => (
                    <View key={index}>
                      <Text>
                        Date:
                        {new Date(value.Date * 1000).toLocaleDateString()}
                      </Text>
                      <Text>{value.Desc}</Text>
                    </View>
                  ))
                ) : (
                  <Text> Patient Information not found </Text>
                )}
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == 'Objective') {
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
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onSubjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Subjective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onObjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Objective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onAssessmentButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Assessment</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onPlanButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Plan</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col
                size={4}
                style={{
                  ...GlobalCss.mr1,
                  ...GlobalCss.alignItemsCenter,
                  ...GlobalCss.alignItemsFlexStart,
                  ...GlobalCss.pl1,
                }}>
                {casenotes ? (
                  casenotes.Objective.map((value, index) => (
                    <View key={index}>
                      <Text>
                        Date:
                        {new Date(value.Date * 1000).toLocaleDateString()}
                      </Text>
                      <Text>{value.Desc}</Text>
                    </View>
                  ))
                ) : (
                  <Text> Patient Information not found </Text>
                )}
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == 'Assessment') {
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
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onSubjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Subjective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onObjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Objective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onAssessmentButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Assessment</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onPlanButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Plan</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col
                size={4}
                style={{
                  ...GlobalCss.mr1,
                  ...GlobalCss.alignItemsCenter,
                  ...GlobalCss.alignItemsFlexStart,
                  ...GlobalCss.pl1,
                }}>
                {casenotes ? (
                  casenotes.Assessment.map((value, index) => (
                    <View key={index}>
                      <Text>
                        Date:
                        {new Date(value.Date * 1000).toLocaleDateString()}
                      </Text>
                      <Text>{value.Desc}</Text>
                    </View>
                  ))
                ) : (
                  <Text> Patient Information not found </Text>
                )}
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
    if (this.state.toggledisplay == 'Plan') {
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
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onSubjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Subjective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onObjectiveButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Objective</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onAssessmentButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Assessment</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                      <Button
                        iconRight
                        light
                        width={150}
                        onPress={this.onPlanButtonPress}
                        style={{...GlobalCss.button}}>
                        <Text>Plan</Text>
                        <Icon name="arrow-forward" />
                      </Button>
                    </ListItem>
                  </List>
                </Content>
              </Col>
              <Col
                size={4}
                style={{
                  ...GlobalCss.mr1,
                  ...GlobalCss.alignItemsCenter,
                  ...GlobalCss.alignItemsFlexStart,
                  ...GlobalCss.pl1,
                }}>
                {casenotes ? (
                  casenotes.Plan.map((value, index) => (
                    <View key={index}>
                      <Text>
                        Date:
                        {new Date(value.Date * 1000).toLocaleDateString()}
                      </Text>
                      <Text>{value.Desc}</Text>
                    </View>
                  ))
                ) : (
                  <Text> Patient Information not found </Text>
                )}
              </Col>
            </Row>
          </Grid>
        </Container>
      );
    }
  }
}
