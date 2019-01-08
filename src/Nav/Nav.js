import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Nav = (props) =>{
   return <View style={styles.nav}>
        <Text>{props.nameOfApp}</Text>
    </View>
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'green',
        alignItems:'center',
        padding:10,
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'#ccc',
        // borderWidth:2,
        // borderColor:'#ccc'   
    }
})

export default Nav;