import React, { Component } from 'react';
import { Platform, Stylesheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'stack-navigation' ;


class Registration extends Component{
	static navigationOptions = {
		title : Registration,
	};
	render(){
		return(
			<Text style={
				{fontWeight: 'bold'},
				{color : 'blue'}
			}>

			<Text>Name :</Text>
			<TextInput 
				style={
					{height: 20, borderColor : 'black', borderWidth: 1}

				}
				onChangingText={ (name) => this.setState({name})}
				value=this.state.name
			/>

			<Text>Aadhaar Card No :</Text>
			<TextInput 
				style={
					{height: 20, borderColor : 'black', borderWidth: 1}

				}
				onChangingText={ (aadhaar) => this.setState({aadhaar})}
				value=this.state.aadhaar
			/>

			<Text>DateOfBirth :</Text>
			<TextInput 
				style={
					{height: 20, borderColor : 'black', borderWidth: 1}

				}
				onChangingText={ (dob) => this.setState({dob})}
				value=this.state.dob
			/>

			<Text>Contact No :</Text>
			<TextInput 
				style={
					{height: 20, borderColor : 'black', borderWidth: 1}

				}
				onChangingText={ (contact) => this.setState({contact})}
				value=this.state.contact
			/>

			<Text>Emergency Contact No :</Text>
			<TextInput 
				style={
					{height: 20, borderColor : 'black', borderWidth: 1}

				}
				onChangingText={ (emcn) => this.setState({emcn})}
				value=this.state.emcn
			/>


			</Text>


			<Button
				onPress={}
				title : Submit
				color : 'blue'

			/>
		);
	} 

}
