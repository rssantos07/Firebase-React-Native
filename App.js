
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUsers from './src/component/AddUsers';
import EditUsers from './src/component/EditUsers';
import DeleteUsers from './src/component/DeleteUsers';
import ListUsers from './src/component/ListUsers';
import AddProdutos from './src/component/AddProdutos';
import EditProdutos from './src/component/EditProdutos';
import DeleteProdutos from './src/component/DeleteProdutos';
import ListaProdutos from './src/component/ListaProdutos';

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState([]);

  useEffect(
    () => {
      // pegaDados()
      // pegaDadosQuando()
      // pegaDadosId()
      // todosProdutos()
      // produtosId()
      // produtosOff ()
      // produtosDepartamento()
      // produtosMaiorque()

    }, []
  )
  // const pegaDados = async () => {
  //   const users = firebase.db.collection ('users');

  //   const querySnapshot = await users.get();

  //   const dados = querySnapshot.docs;

  //   dados.forEach(
  //     doc=>console.log(doc.data())
  //   )
  // }
  // const pegaDadosQuando = async () => {
  //   const users = firebase.db.collection('users');
  //   const resposta =  await users.where('nome', '==' ,'Rodrigo').get();
  //   resposta.forEach(
  //     user =>console.log(user.data())
  //   )
  // }
  // const pegaDadosId = async () => {
  //   const users = firebase.db.collection('users');
  //   const resposta =  await users.doc('YRHA44xwb9EfLHlyi0oB').get();
  //     console.log(resposta.data())
  // }
  /**
   * No Cloud Firestore crie uma coleção chamada produtos.
   * Cada documento deverá ter as seguintes propriedades e seus valores:
   * nome, preco, departamento(eletronicos, moveis, alimentacao e automotivo), status (on ou off) e fabricante 
   * 
   * crie 10 documentos com valores aleatórios para cada produto que 
   * pertençam aos departamentos descritos.
   * 
   * crie funções de busca de acordo com o que se pede:
   * 
   * 1 - receber todos os produtos.
   * 2 - receber produto pelo id.
   * 3 - receber produtos com status igual off
   * 4 - receber produtos com departamento igual a eletronicos.
   * 5 - receber produtos com preco acima de 50 pilas.
   */
  const todosProdutos = async () => {
    const produtos = firebase.db.collection('produtos');

    const querySnapshot = await produtos.get();

    const dados = querySnapshot.docs;

    dados.forEach(
      doc => console.log(doc.data())
    )
  }
  const produtosId = async () => {
    const produtos = firebase.db.collection('produtos');
    const produto1 = await produtos.doc('OjNcokxgHqdaX6t2Otb0').get();
    const produto2 = await produtos.doc('gZBywJKCVE38qWyw2SC0').get();
    const produto3 = await produtos.doc('mrw5fTp88aRegEwiIavS').get();
    console.log(produto1.data())
    console.log(produto2.data())
    console.log(produto3.data())
  }
  const produtosOff = async () => {
    const produtos = firebase.db.collection('produtos');
    const off = await produtos.where('status', '==', 'off').get();
    off.forEach(
      produto => console.log(produto.data())
    )
  }
  const produtosDepartamento = async () => {
    const produtos = firebase.db.collection('produtos');
    const departamento = await produtos.where('departamento', '==', 'eletronicos').get();
    departamento.forEach(
      produto => console.log(produto.data())
    )
  }
  const produtosMaiorque = async () => {
    const produtos = firebase.db.collection('produtos');
    const departamento = await produtos.where('preco', '>', 1000).get();
    departamento.forEach(
      produto => console.log(produto.data())
    )
  }

  const inseriDado = async () => {
    await firebase.db.collection('users').add({
      nome: 'Josiel',
      email: 'jo@j.com'
    }).then(
      () => alert('salved')
    ).catch(
      () => alert('não foi possível inserir')
    )
  }

  const editarDoc = async () => {
    const users = firebase.db.collection('users')
    await users.doc('0KsaXuW91eCHcjvUzInz').update({
      nome: 'joelson'
    }).then(
      () => alert('Edited')
    ).catch(
      () => alert('não foi possível editar')
    )
  }

  const deletarDoc = async () => {
    const users = firebase.db.collection('users');
    await users.doc('eualo').delete()
      .then(
        () => alert('Deletado')
      ).catch(
        () => alert('não encontrado')
      )
  }


  return (
    // <View>
    //  <Button title='Inserir' onPress={inseriDado}/>
    //  <Button title='Editar' onPress={editarDoc}/>
    //  <Button title='Deletar' onPress={deletarDoc}/>
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListUsers'>
        {/* <Stack.Screen name='ListUsers' component={ListUsers} />
        <Stack.Screen name='AddUsers' component={AddUsers} />
        <Stack.Screen name='EditUsers' component={EditUsers} />
        <Stack.Screen name='DeleteUsers' component={DeleteUsers} /> */}

        {/* <Stack.Screen name='ListaProdutos' component={ListaProdutos} />
        <Stack.Screen name='AddProdutos' component={AddProdutos} />
        <Stack.Screen name='EditProdutos' component={EditProdutos} />
        <Stack.Screen name='DeleteProdutos' component={DeleteProdutos} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
