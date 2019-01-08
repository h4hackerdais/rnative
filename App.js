import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// we import our nav component
import Nav from './src/Nav/Nav';
// this is our add click button function add new random math value in array
import Generator from './src/generator/generator';

// we are importing listarray here
import ListItem from './src/generator/listitem';


export default class App extends Component{
// we add value in our state
  state = {
    nameOfApp:"Hacker Dais",
    // this is our random array show in item list
    random:[12,14]
  }

  // this is our function we call it with another component
  onAddRandom = () =>{
    // alert("add random");

    // this function generate random number
    const random = Math.floor(Math.random()*100)+1;

    // this set random add prevState get old state value mean random value
    this.setState(prevState=>{
      return {
        // es6 new feature array
        random:[...prevState.random, random]
      }
    })
  }
  render() {
  
    return (
     
      <View style={styles.container}>
   
     <Nav nameOfApp={this.state.nameOfApp} />

      {/* This is our component we add our function in this component and this component call our function by props */}
    <Generator add={this.onAddRandom} />

      {/* This is our component we are sending item list array to ListItem component */}
      <ListItem items={this.state.random} />

      </View>
    );
  }
}
// this is our style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // center everything vertifcally
    alignItems: 'center', // // center everything horizontally
    backgroundColor: '#F5FCFF',
  }
});
