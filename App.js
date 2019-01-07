/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // this is first method css class with object we have create first StyleSheet.create object
      <View style={styles.container}>
       <View>
        <Text style={styles.welcome}>Welcome to !</Text>
        </View>

        {/* this is inline style and second method */}
        <View style={{backgroundColor:'red', width:'100%'}}>
        <Text>Hacker Dais!</Text>
        </View>

      {/* horizontally flex apply */}
        <View style={styles.myview}>
        <Text>Hacker Dais!</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center everything vertifcally
    
    justifyContent: 'flex-start', // start everything vertifcally top
    // justifyContent: 'flex-end', // end everything vertifcally bottom

    // alignItems: 'center', // // center everything horizontally
    
    alignItems: 'flex-start', // start everything horizontally left
    alignItems: 'flex-end', // end everything horizontally right

    marginTop:153,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myview:{
    backgroundColor:'blue'
    

  },

});
