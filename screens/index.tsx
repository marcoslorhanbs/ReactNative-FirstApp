import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import {BasicBtn} from '../themes/theme'
export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return(
      <View>
        <View style={styles.centralized}><Text>{counter}</Text></View>
        <Button title='+' onPress={() => setCounter(counter + 1)}></Button>
        <Button title='-' onPress={() => setCounter(counter - 1)}></Button>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centralized: {
      alignItems: 'center'
    },
  });

export const InputTest = () =>{
  const[text, textName] = useState("");
  return(
    <View>
      
    

      <Text>{text}</Text>
      <TextInput placeholder='Name:' style={{ height: 40, width: 100, paddingLeft: 6 }} underlineColorAndroid="#1e1e1e"
        onChangeText={(text) => textName(text)}
        value={text} />

      <BasicBtn onPress={() => alert(text)}><Text>Visualizar</Text></BasicBtn>
      
      

      
    </View>
  )
}