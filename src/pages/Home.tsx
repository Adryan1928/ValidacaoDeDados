import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createNavigator } from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {Form, Field, Formik} from 'formik';
import * as yup from 'yup';
import { InputField } from '../components/input';

export function Home () {
    const navigation = useNavigation()

    const initialValues = {
        user: '',
        password: ''
    }

    const schema = yup.object().shape({
        user: yup.string().required("Digite o email").email('Digite um email válido'),
        password: yup.string().required("Digite sua senha").min(8, 'Digite 8 caractéries')
    })

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Yachego</Text>

            <Text>Bem vindo de volta</Text>

            <Formik
                onSubmit={(values) => console.log(values)}
                initialValues={initialValues}
                validationSchema={schema}
            >
                { ({values, handleSubmit}) => (
                    <View style={{gap: 24}} >
                        <InputField name='user' label='Digite seu email' />
                        <InputField name='password' label='Digite sua senha' />
                        <Button title='Ir para próxima página' onPress={() => {handleSubmit()}} />
                    </View>
                )}
            </Formik>
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
    }
})