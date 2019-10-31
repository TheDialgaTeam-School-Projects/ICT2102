import React, {Component} from 'react';
import DatePicker from 'react-native-date-picker';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Text,
  View,
  ListItem,
  Radio,
  Right,
  Left,
} from 'native-base';
import {GlobalCSS} from '../../../css/Global';
import {CustomHeaderComponent} from '../../Component/CustomHeader';
import {FoodController} from '../../../controller/Patient/Food/Food';

export class FoodView extends Component {
  constructor(props) {
    super(props);
    this.controller = new FoodController(this);
  }
  render() {
    return (
        <Container>
            <CustomHeaderComponent headerTitle="SELECT FOOD" {...this.props} />
            <Grid>
                <Row>
                    <Col style={{ height: '100%'}, GlobalCSS.alignItemsLeft}>
                        <Text style={{textDecorationLine: "underline", fontSize: 40}}>Breakfast</Text>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Bread</Text>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Pancakes</Text>
                            </Left>
                        </ListItem>
                    </Col>
                    <Col style={{ height: '100%'}, GlobalCSS.alignItemsLeft}>
                        <Text style={{textDecorationLine: "underline", fontSize: 40}}>Lunch</Text>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Chicken Rice</Text>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Vegetarian Meal</Text>
                            </Left>
                        </ListItem>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ height: '100%'}, GlobalCSS.alignItemsLeft}>
                        <Text style={{textDecorationLine: "underline", fontSize: 40}}>Dinner</Text>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Burger</Text>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Radio selected={false} selectedColor={"#5cb85c"}/>
                                <Text>{'\t'}Chicken Chop</Text>
                            </Left>
                        </ListItem>
                            <Button
                                regular
                                iconLeft
                                style={GlobalCSS.button, { position: 'absolute', bottom: '10%', right: '3%'}}
                                onPress={this.controller.onPressAddReminder}>
                                <Text style={GlobalCSS.buttonIconLabel}>Update</Text>
                            </Button>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )};
}
