import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function GorevEkle(props) {
  
  return (
    <TextInput style={styles.yazi}
        placeholder ='Görev Yaz..'
        onChangeText={props.ekle}
        placeholderTextColor={"white"}
        />
  )
}

const styles = StyleSheet.create({
    yazi: {
        color: "white",
        padding: 10,
        fontSize: 18
    }
})