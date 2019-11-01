import React, {Component} from 'react';
import DatePicker from 'react-native-date-picker';
import {Col, Grid, Row} from 'react-native-easy-grid';
import RadioGroup from 'react-native-radio-buttons-group';
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
import {GlobalCss} from '../../../css/GlobalCss';
import {HeaderComponent} from '../../Component/Header';
import {FoodController} from '../../../controller/Patient/Food/Food';

export class FoodView extends Component {
  constructor(props) {
    super(props);
		this.controller = new FoodController(this);
		this.state = {
			bFastSelected: '',
			lunchSelected: '',
			dinnerSelected: '',
			//This will be fetched from database, hardcoded for now
			bFastData: 
			[
				{
					label: 'Bread',
					value: 'Bread'
				},
				{
					label: 'Pancakes',
					value: 'Pancakes'
				}
			],
		};
	}

	onBFSel = bFastData => this.setState({ bFastData });

  render() {
    return (
			<Container>
				<HeaderComponent headerTitle="SELECT FOOD" {...this.props} />
				<Grid>
					<Row>
						<Col style={{ height: '100%'}, GlobalCss.alignItemsLeft}>
							<Text style={{textDecorationLine: "underline", fontSize: 40}}>Breakfast</Text>
							<RadioGroup 
								radioButtons={this.state.bFastData} 
								onPress={this.onBFSel}
								style={{  }}
								labelStyle={{ fontSize: 14, }}
							/>
						</Col>
						<Col style={{ height: '100%'}, GlobalCss.alignItemsLeft}>
							<Text style={{textDecorationLine: "underline", fontSize: 40}}>Lunch</Text>
							<ListItem>
								<Left>
									<Radio selected={false} />
									<Text>{'\t'}Chicken Rice</Text>
								</Left>
							</ListItem>
							<ListItem>
								<Left>
									<Radio selected={false} />
									<Text>{'\t'}Vegetarian Meal</Text>
								</Left>
							</ListItem>
						</Col>
					</Row>
					<Row>
						<Col style={{ height: '100%'}, GlobalCss.alignItemsLeft}>
							<Text style={{textDecorationLine: "underline", fontSize: 40}}>Dinner</Text>
							<ListItem>
									<Left>
											<Radio selected={false} />
											<Text>{'\t'}Burger</Text>
									</Left>
							</ListItem>
							<ListItem>
									<Left>
											<Radio selected={false} />
											<Text>{'\t'}Chicken Chop</Text>
									</Left>
							</ListItem>
							<Button
									regular
									iconLeft
									style={GlobalCss.button, { position: 'absolute', bottom: '10%', right: '3%'}}
									onPress={this.controller.onPressAddReminder}>
									<Text style={GlobalCss.buttonIconLabel}>Update</Text>
							</Button>
						</Col>
					</Row>
				</Grid>
			</Container>
    )};
}
