import { StyleSheet, Text, View, Pressable} from 'react-native'
import React, { useState } from 'react'

export default function GorevCard(props) {
    const yapildi = () =>{
        console.log("islem")
        
    }
    return (
        <View style={styles.container}>
            <Pressable  onPress={yapildi}>
                <Text style={styles.text}>{props.gorev}</Text>
            </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        borderWidth:1,
        margin:5,
        borderRadius:10,
        backgroundColor:"#7DA453",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    }
})