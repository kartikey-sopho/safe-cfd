import React, { Component } from 'react';
import { Platform, Stylesheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'stack-navigation' ;


class login extends Component{
	static navigationOptions = {
		title : Login,
	};

	render(){
		return(
			<Text style={
				{fontWeight: 'bold'},
				{color : 'blue'}
			}>


			<Text>User Name : </Text>
			<TextInput
				style{
					{height: 20, borderColor : 'black', borderWidth: 1}
				}
				onChangingText={(username) => this.setState({username})}
				value= this.state.username
			/>


			<Text>Password : </Text>
			<TextInput
				style{
					{height: 20, borderColor : 'black', borderWidth: 1}
				}
				onChangingText={(password) => this.setState({password})}
				value= this.state.password
			/>



			</Text>


			<Button
				onPress={}
				title : Submit
				color : 'blue'

			/>


			<Button
				onPress={ () => this.props.navigation.navigate('Registration') }
				title : Register
				color : 'blue'

			/>


			);
	}
}