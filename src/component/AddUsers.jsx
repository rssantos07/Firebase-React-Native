import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import firebase from '../../firebase';

export default function AddUsers({ navigation }) {
    const [ok, setOk] = useState(false)
    const [state, setState] = useState({
        nome: '',
        email: ''
    })

    const handleInputChange = (name, value) => {
        setState({
            ...state, [name]: value
        })
    }
    const addUser = async () => {
        await firebase.db.collection('users').add(state).then(
            () => {
                alert('salvo')
                setOk(true)
            }
        ).catch(
            () => alert('não inserido')
        )
    }
    if (ok) {
        // alert('entrou')
        navigation.popToTop()
    }

console.log(state)

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Adicionar Usuário</Text>
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
                    (value) => handleInputChange('email',value)
                } />
            <Button
                style={styles.input}
                title='Adicionar'
                onPress={addUser}
/>
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
