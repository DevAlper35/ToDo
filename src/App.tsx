import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import GorevCard from './components/GorevCard';
import GorevEkle from './components/GorevEkle';

function App(): React.JSX.Element {
  const [gorev, setGorev] = useState(["alper","mudurlu"])
  const [yeniGorev, setYeniGorev] = useState("")

  function handleGorev(gorev){
    setYeniGorev(gorev)
    console.log(yeniGorev)
  }

  function gorevEkle() {
    setGorev([...gorev,yeniGorev])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <FlatList
        data={gorev}
        renderItem={({item}) => <GorevCard gorev={item}/>}
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
