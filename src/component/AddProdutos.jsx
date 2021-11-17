import React from 'react';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList,TextInput } from 'react-native';

export default function AddProdutos({ navigation }) {
const [ok,setOk] = useState(false)
const [state,setState]=useState({
    nome:'',
    preco:'',
    departamento:'',
    fabricante:'',
    status:''
})

const handleInputChange = (name,value)=> {
    setState({
        ...state,[name]:value
    })
}
const addProdutos = async ()=> {
    await firebase.db.collection('produtos').add(state)
    .then(
        ()=> {
            alert('Adicionado')
            setOk(true)
        }
    ).catch(
        ()=>alert('produto não inserido')
    )
}
if (ok){
    navigation.popToTop()
}
console.log(state)

return (
    <View style={styles.container}>
            <Text style={styles.h1}>Adicionar Produto</Text>
            <TextInput
                style={styles.input}
                placeholder='nome'
                defaultValue={state.nome}
                onChangeText={
                    (value) => handleInputChange('nome', value)}
            />
            <TextInput
                style={styles.input}
                placeholder='preco'            
                defaultValue={state.preco}
                onChangeText={
                    (value) => handleInputChange('preco',value)
                } />
                <TextInput
                style={styles.input}
                placeholder='departamento'                
                defaultValue={state.departamento}
                onChangeText={
                    (value) => handleInputChange('departamento',value)
                } />
                <TextInput
                style={styles.input}
                placeholder='fabricante'                
                defaultValue={state.fabricante}
                onChangeText={
                    (value) => handleInputChange('fabricante',value)
                } />
                <TextInput
                style={styles.input}
                placeholder='status'                
                defaultValue={state.status}
                onChangeText={
                    (value) => handleInputChange('status',value)
                } />
            <Button
                style={styles.input}
                title='Adicionar'
                onPress={addProdutos}
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
