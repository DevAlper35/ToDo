import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function GorevEkle(props) {
  return (
    <TextInput 
        placeholder='Görev Yaz..'
        onChangeText={props.ekle}
        />
  )
}

const styles = StyleSheet.create({})