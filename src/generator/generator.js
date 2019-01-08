import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

// we get function by props and we call this function by props
const generator = (props) =>( 
    <TouchableWithoutFeedback
        onPress={()=>{
            // we are calling another component function in this component by props
            props.add();

        }}

    //  onPress={()=>alert("Touched")}
    //  onLongPress={()=>alert("Touched Long")}
    //  onPressIn={()=>alert("Touched in")}
    // onPressOut={()=>alert("Touched out")}

    // set long property time
    // onLongPress={()=>alert("Touched Long")}
    // delayLongPress={5000}

     >
    <View style={styles.generat}>
        <Text>Add Number</Text>
    </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    generat:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#00bcd4',
        width:'100%',
        marginTop:20
    }

});

export default generator;