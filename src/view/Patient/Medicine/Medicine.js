import firestore from '@react-native-firebase/firestore';
import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  Title,
  View,
  Header,
  Card,
  CardItem,
  Body
} from 'native-base';
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {MedicineController} from '../../../controller/Patient/Medicine/Medicine';

export class MedicineView extends Component {
  constructor(props) {
    super(props);
    this.controller = new MedicineController(this);
    this.state = {

        test: [],
    };
  }

  async willFocus() {
  const query = await firestore()
      .collection('patients')
      .get();

      query.forEach(doc => {
        var data = doc.data();
        this.setState({ test: data.Medicine });
      });

    console.log(this.state.test);
  }

  componentDidMount()
  {
  this.willFocus();
  }
  
  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="MEDICINE" {...this.props} />
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text style={{fontWeight: 'bold', fontSize: 32}}>Medicine Taken By Patient</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={{fontSize: 24}}>
                    {this.state.test.join('\n\n')}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
      </Container>
    );
  }
}
