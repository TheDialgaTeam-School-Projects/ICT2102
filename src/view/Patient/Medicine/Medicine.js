import React, {Component} from 'react';
import {Container, Content, Text, Card, CardItem, Body} from 'native-base';
import {HeaderComponent} from '../../Component/Header';
import {MedicineController} from '../../../controller/Patient/Medicine/Medicine';

export class MedicineView extends Component {
  constructor(props) {
    super(props);
    this.controller = new MedicineController(this);
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
    let medicines = this.state.patientModel
      ? this.state.patientModel.getPatientMedicine()
      : [];

    return (
      <Container>
        <HeaderComponent headerTitle="Medicine" {...this.props} />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight: 'bold', fontSize: 32}}>
                Medicine Taken By Patient
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 24}}>{medicines.join('\n\n')}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
