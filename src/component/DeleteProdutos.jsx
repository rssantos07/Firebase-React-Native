import React from 'react';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function DeleteProdutos({route, navigation }) {
    const key = route.params;
    const [ok,setOk] =useState(false)

    const deleteProdutos = async ()=>{
        const produtos = firebase.db.collection('produtos');
        await produtos.doc(key).delete()
        .then(()=>{
            alert('Produto Deletado')
            setOk(true)
        })
        .catch(
            error => alert(error)
        )
    }
if (ok){
    navigation.popToTop();
}
return(
    <View>
        <Text style={StyleSheet.h1}>Deseja exluir Produto?</Text>
        <Button 
        title='sim'
        onPress={deleteProdutos}/>
        <Button title='não' onPress={()=>navigation.goBack()}/>
       
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12
},
h1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12
},
input: {
    height: 60,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    marginTop: 5
},
alert: {
    backgroundColor: 'red',
}
});