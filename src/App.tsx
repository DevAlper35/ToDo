import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  Alert
} from 'react-native';
import GorevCard from './components/GorevCard';
import GorevEkle from './components/GorevEkle';

function App(): React.JSX.Element {
  const [gorev, setGorev] = useState([])
  const [yeniGorev, setYeniGorev] = useState("")
  const [inputClear, setInputClear] = useState(true)

  function handleGorev(gorev){
    setYeniGorev(gorev)
    console.log(yeniGorev)
  }

  function gorevEkle() {
    if(yeniGorev != ""){
      setGorev([yeniGorev,...gorev])// En yeni görev en yukarda
      //setGorev([...gorev,yeniGorev])// En yeni görev en aşağıda
      setYeniGorev("")

    }else{
      Alert.alert("Tekrarlanan Görev", "Bu görev zaten var")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <FlatList
        data={gorev}
        renderItem={({item}) => <GorevCard gorev={inputClear?item:""}/>}
        />
      <GorevEkle ekle={handleGorev}/>
      <Button
        title="Görev Ekle"
        onPress={gorevEkle}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027"
  },
  
  title: {
    padding: 15,
    fontSize:30,
    fontWeight: "800",
    color: "goldenrod"
  }
});

export default App;
