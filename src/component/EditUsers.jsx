import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../../firebase';

export default function EditUsers({ route, navigation }) {
    const [ok, setOk] = useState(false)
    const [state, setState] = useState({
        nome: '',
        email: ''
    })
    const key = route.params
    useEffect(
        () => navigation.addListener('focus', () => {
            userById(key);
        }), []
    )
   
    const userById = async (id) => {
        const users = firebase.db.collection('users')
        const doc = await users.doc(id).get()
        setState(doc.data())
    }
    const editUSer = async () => {
        const users = firebase.db.collection('users')
        await users.doc(key).update(state)
            .then(() => {
                alert('editado')
                setOk(true)
            })
            .catch(error => alert(error))
    }
    const handleInputChange = (name, value) => {
        setState({
            ...state,[name]:value
        })
        
    }
    console.log(state)
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.h1}>Editar Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder='nome'
                    defaultValue={state.nome}
                    onChangeText={
                        (value) => handleInputChange('nome', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    textContentType='emailAddress'
                    defaultValue={state.email}
                    onChangeText={
                        (value) => handleInputChange('email', value)
                    } />
                <Button
                    style={styles.input}
                    title='Editar'
                    onPress={editUSer}
                />
            </View>
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