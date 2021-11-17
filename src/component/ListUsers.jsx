import React from 'react';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function ListUsers({ navigation }) {
    // esse state srá responsável por escolher a renderização após o carregamento de dados
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState([])

    useEffect(
        () => navigation.addListener('focus', () => {
            pegaDados()
        }), []
    )

    const pegaDados = async () => {
        const users = firebase.db.collection('users');
        const resposta = await users.get();

        const listUsers = [];

        resposta.forEach(
            doc => {
                listUsers.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
        setState(listUsers)
        setLoading(false)
    }
    console.log(state)


    if (loading) {
        return <ActivityIndicator animating={true} size="large" color="red" />

    }
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Lista de Usuários</Text>
            <Button
                title='adicionar'
                onPress={() => { setLoading(true); navigation.navigate('AddUsers') }} />
            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nome: {item.nome}</Text>
                        <Text>email: {item.email}</Text>
                        <Text>Key: {item.key}</Text>
                        <Text> </Text>
                        <Button
                            title='editar'
                            onPress={() => { navigation.navigate('EditUsers', item.key) }} />
                        <Button
                            title='Excluir'
                            color='red'
                            onPress={() => { navigation.navigate('DeleteUsers', item.key) }} />

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