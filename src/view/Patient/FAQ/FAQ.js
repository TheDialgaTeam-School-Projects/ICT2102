import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Container, Content, Accordion, View} from 'native-base';
import {HeaderComponent} from '../../Component/Header';
import {FAQController} from '../../../controller/Patient/FAQ/FAQ';

const dataArray = [
  {
    title: '1.How to enter a new patient?',
    content:
      ' 1.From the main screen select the patient button which is located at the top right of the header. \n\n 2.In the Profile screen, you can either remove the current patitent by pressing the remove patient button or change the current patient by pressing the change patient button. \n\n 3.The next page you will see after confirming the option, will be the enter new patient screen.',
  },
  {
    title: '2.How to remove current patient?',
    content:
      ' 1.From the main screen select the patient button which is located at the top right of the header. \n\n 2.In the Profile screen, you can either remove the current patitent by pressing the remove patient button or change the current patient by pressing the change patient button. \n\n 3.The next page you will see after confirming the option, will be the enter new patient screen.',
  },
  {
    title: "3.How to update patient's food?",
    content:
      ' 1.Navigate to the food page by selecting the food tab from the navigation tabs on the bottom of the screen.\n\n 2.Select the meal for each meal timming accordingly by using the radio buttons provided. \n\n 3.When you are done, press the update button. \n\n 4.Once you have confirmed the order, the system will update the kitchen on the selected food preferences of the patient.',
  },
  {
    title: '4.How to check vitals history?',
    content:
      ' 1.Navigate to the vitals page by selecting the vitals tab from the navigation tabs on the bottom of the screen.\n\n 2.Select the history button located on the left side of the page \n\n 3.The graph showing the history of the temperature on the left and history of blood preasure on the right. \n\n If you want to navigate to the previous page, you can press the back button.',
  },
  {
    title: "5.How to check patient's medicine dosages?",
    content:
      ' 1.Navigate to the medicine page by selecting the medicine tab from the navigation tabs on the bottom of the screen.\n\n 2.The list of medicine needed to be taken by the patient will be displayed.',
  },
  {
    title: '6.How to add reminders?',
    content:
      ' 1.Navigate to the reminders page by selecting the reminders tab from the navigation tabs on the bottom of the screen.\n\n 2.The list of current reminders will be displayed if there are any. \n\n 3.To add a new reminder, press the add reminder button which will bring you to the add reminders page. \n\n 4.In the add reminders page, you must enter the description and timming of the reminder. \n\n 5.Once you are done, press the submit button and you will be brought back to the reminders page with the new reminder added to the list.',
  },
  {
    title: '7.How to edit reminders?',
    content:
      ' 1.Navigate to the reminders page by selecting the reminders tab from the navigation tabs on the bottom of the screen.\n\n 2.The list of current reminders will be displayed if there are any. \n\n 3.Select a reminder to be edited by pressing the pencil icon. You will be brought to the edit reminders page with the selected the reminder information displayed. \n\n 4.Once you are done editing the reminder information, just press the submit button and you will be brought back to the reminders page with the updated reminder information displayed',
  },
];
export class FAQView extends Component {
  constructor(props) {
    super(props);
    this.controller = new FAQController(this);
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

  onPlanButtonPress = () => {
    this.setState({
      toggledisplay: 'Plan',
    });
  };

  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="FAQ" {...this.props} />
        <View padder />
        <Grid>
          <Row size={11}>
            <Col size={11}>
              <Content>
                <Accordion
                  dataArray={dataArray}
                  animation={true}
                  expanded={true}
                />
              </Content>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
