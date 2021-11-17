import React from 'react';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function ListaProdutos({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([])

    useEffect(
        () => navigation.addListener('focus', () => {
            pegaDados()

        }), []
    )

    const pegaDados = async () => {
        const produtos = firebase.db.collection('produtos');
        const exibir = await produtos.get();

        const listaprodutos = [];

        exibir.forEach(
            doc => {
                listaprodutos.push({
                    ...doc.data(),
                    key: doc.id
                })
            }
        )
        setState(listaprodutos)
        setLoading(false)
    }
    console.log(state)
    if(loading){
        return (<ActivityIndicator animating={true} size="large" color="red" />)
    }
    return (
        <View style={styles.container}>
        <Text style={styles.h1}>Lista de Produtos</Text>
        <Button
            title='adicionar'
            onPress={() => { setLoading(true); navigation.navigate('AddProdutos') }} />
        <FlatList
            data={state}
            renderItem={({ item }) => (
                <View>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Preço: {item.preco}</Text>
                    <Text>Departamento: {item.departamento}</Text>
                    <Text>Fabricante: {item.fabricante}</Text>
                    <Text>Status: {item.status}</Text>
                   
                    <Text> </Text>
                    <Button
                        title='editar'
                        onPress={() => { navigation.navigate('EditProdutos', item.key) }} />
                    <Button
                        title='Excluir'
                        color='red'
                        onPress={() => { navigation.navigate('DeleteProdutos', item.key) }} />

                </View>
            )} />


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
}

})
    