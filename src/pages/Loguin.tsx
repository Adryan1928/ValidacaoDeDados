import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Formik} from 'formik';
import * as yup from 'yup';
import { InputField } from '../components/input'
import { useAuth } from '../Hooks/useAuth';

interface valuesProps {
    user: string,
    password: string
}

export function Home () {
    const navigation = useNavigation()
    const { signIn, error } = useAuth()

    const initialValues = {
        user: '',
        password: ''
    }

    const schema = yup.object().shape({
        user: yup.string().required("Digite o email").email('Digite um email válido'),
        password: yup.string().required("Digite sua senha").min(8, 'Digite 8 caractéries')
    })

    async function handleSubmit (values : valuesProps ) {
        signIn(values)
    }

    function handleSingIn () {
        navigation.navigate('SingIn')
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Yachego</Text>

            <Text>Bem vindo de volta</Text>

            <Formik
                onSubmit={(values) => handleSubmit(values)}
                initialValues={initialValues}
                validationSchema={schema}
            >
                { ({values, handleSubmit}) => (
                    <View style={{gap: 24}} >
                        {error && <Text>Email ou senha incorreta</Text>}
                        <InputField name='user' label='Digite seu email' />
                        <InputField name='password' label='Digite sua senha' />
                        <Button title='Ir para próxima página' onPress={() => {handleSubmit()}} />
                    </View>
                )}
            </Formik>
            <Text style={styles.footerText} >Quer criar uma conta? <TouchableOpacity onPress={() => handleSingIn()} >
                    <Text style={styles.footerLink}>Cadastre-se</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    },
    title : {
        color: '#bc7f1e',
        fontSize: 32,
        textAlign: 'center'
    },
    footerText: {
        fontSize: 16,
        fontWeight: '400'
    },
    footerLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2628d0'
    }
})