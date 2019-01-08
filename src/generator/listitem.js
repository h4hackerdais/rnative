import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const ListItem = (props) =>{
    return(

        // this is your map show array like foreach
        props.items.map((item, i)=>(
            // this is another event click opacity effect got 
        <TouchableOpacity
        onPress={()=>alert("delete")}
        key={i}
        style={styles.listitem}
        >
         {/*  we are returning item here */}
            <View>
                <Text>{item}</Text>
            </View>

        </TouchableOpacity>
        
        ))
    )
}

const styles = StyleSheet.create({
    listitem:{
        backgroundColor:'#cecece',
        alignItems:'center',
        padding:10,
        width:'100%',
        margin:5
    }
})

export default ListItem;