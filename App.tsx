import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import {StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import {BasicBtn, Card, CardContent, CardTitle, CardSub, WhiteText} from './themes/theme'
import {TopBar, TopContainer, TopTitle, MenuBtn} from './themes/theme'
import {Counter, InputTest} from './screens'



export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [elementVisible, setElementVisible] = useState(false);
  return (
    <>
    <StatusBar barStyle="light-content"
        backgroundColor="#47B5FF"
        />


    <TopBar>
      <TopContainer>
        <TopTitle>
          <AntDesign name="smileo" size={28} color="black" />
          <Text style={styles.bigText}>Primeiro App</Text>
        </TopTitle>
        <MenuBtn onPress={() => setModalVisible(true)}><AntDesign name="bars" size={34} color="black" /></MenuBtn>
      </TopContainer>
    </TopBar>
    
    
    <View style={styles.container}>
    <Card>
        <CardContent>
          <CardTitle>Primeiro App</CardTitle>
          <CardSub>Olá Seja Bem Vindo Ao Meu Primeiro App
        Aqui irei utilizar tecnicas do React Native</CardSub>
        <BasicBtn  onPress={() => setElementVisible(!elementVisible)}>
          <WhiteText>{elementVisible ? 'Ocultar' : 'Ver Exemplos'}</WhiteText>
          </BasicBtn>
        </CardContent>
      </Card>
    </View>


    {elementVisible ? (
      <View>
          <View style={styles.container && styles.centralized}>
            <InputTest></InputTest>
          </View>
          <Counter></Counter>
      </View>
        ) : null}


    </>
    
  );
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
  bigText:{
    fontSize: 20,
    marginLeft: 2,
  },
  upperView:{
    marginBottom: 2
  },
});
