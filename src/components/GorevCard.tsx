import { StyleSheet, Text, View, Pressable} from 'react-native'
import React, { useState } from 'react'

export default function GorevCard(props) {
    const [check, setCheck] = useState(false)

    const yapildi = () =>{
        setCheck(!check)
    }
    return (
        <View style={check? styles.containerPress : styles.container}>
            <Pressable  onPress={yapildi}>
                <Text style={check ? styles.textPress : styles.text}>
                    {props.gorev}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:15,
        borderWidth:1,
        margin:5,
        borderRadius:10,
        backgroundColor:"#7DA453",
    },
    containerPress: {
        padding:15,
        borderWidth:1,
        margin:5,
        borderRadius:10,
        backgroundColor:"dimgrey",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    textPress: {
        fontSize: 18,
        fontWeight: "bold",
        color: "darkgrey",
        textDecorationLine: "line-through"
        
    }
})