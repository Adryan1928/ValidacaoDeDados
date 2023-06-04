import React, {useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Formik} from 'formik';
import * as yup from 'yup';
import { InputField } from '../components/input'
import { AuthContext } from '../contexts/auth';

interface valuesProps {
    user: string,
    password: string
}

export function Home () {
    const navigation = useNavigation()
    const { signIn } = useContext(AuthContext)

    const initialValues = {
        user: '',
        password: ''
    }

    const schema = yup.object().shape({
        user: yup.string().required("Digite o email").email('Digite um email válido'),
        password: yup.string().required("Digite sua senha").min(8, 'Digite 8 caractéries')
    })

    async function handleSubmit (values : valuesProps ) {
        // const response = await signIn()
        signIn()
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