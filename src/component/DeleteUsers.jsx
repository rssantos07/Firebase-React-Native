import React from 'react';
import { Text,View,Button, StyleSheet } from 'react-native';
import firebase from '../../firebase';
import { useEffect, useState} from 'react';


export default function DeleteUsers({route,navigation}){
    const key = route.params;
    const [ok,setOk] =useState(false)

    const deleteUser = async() => {
        const users = firebase.db.collection('users');
        await users.doc(key).delete()
        .then(()=>{alert('deletado')
                    setOk(true)
    })
        .catch(
            error=>alert(error)
        )
    }
    if(ok){
        navigation.popToTop();
    }
    return(
        <View>
            <Text style={StyleSheet.h1}>Deseja exluir usuario?</Text>
            <Button 
            title='sim'
            onPress={deleteUser}/>
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