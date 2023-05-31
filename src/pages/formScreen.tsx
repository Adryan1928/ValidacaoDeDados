import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import * as yup from 'yup';
import { Field, Form, Formik, useField } from 'formik';
import { Input } from '@ui-kitten/components';

const initialValues = {
    email: '',
    senha: ''
}

export function FormScreen() {
    const schema = yup.object().shape({
        email: yup.string().min(10, 'falta caractéries').required('digite alguma coisa'),
        senha: yup.string().required('digite alguma coisa').min(4, 'falta caractéries')
    })
    const name = {
        name: 'email'
    }

    const [teste, setTeste] = useState('rkvorm');

    const senha = useRef(null)
    const email = useRef(null)

    // const [field, meta, helpers] = useField('email');

    return (
        <View  >
            <Text>Loguin</Text>
            <Formik
                onSubmit={values => {console.log(values)}}
                initialValues={initialValues}
                validationSchema={schema}
            >
                {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
                        <View>
                            <Text>Digite seu email</Text>
                            <TextInput
                                ref={email}
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {errors.email && <Text style={{color: '#a71b1b'}} >{errors.email}</Text>}
                            <Text>Digite sua senha</Text>
                            <TextInput
                                style={styles.input}
                                ref={senha}
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                            />
                            {errors.senha && <Text style={{color: '#a71b1b'}} >{errors.senha}</Text>}
                            <Button title='Enviar' onPress={() => handleSubmit()} />
                            <Text>{teste}</Text>
                        </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: '#d0cece',
        borderColor: '#aba9a9',
        borderWidth: 2,
        width: 300,
        borderRadius: 5,
        padding: 5,

    }
})