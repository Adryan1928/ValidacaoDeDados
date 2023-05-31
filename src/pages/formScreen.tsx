import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import * as yup from 'yup';
import { Field, Form, Formik, useField } from 'formik';
import { Input } from '@ui-kitten/components';

const initialValues = {
    email: 'okfofke',
    senha: ''
}

export function FormScreen() {
    const schema = yup.object().shape({
        email: yup.string().min(10, 'falta caractéries')
    })
    const name = {
        name: 'email'
    }
    // const [field, meta, helpers] = useField('email');

    return (
        <View  >
            <Text>Loguin</Text>
            <Formik
                onSubmit={() => {}}
                initialValues={initialValues}
                validationSchema={schema}
                validateOnChange
            >
                {({ values, handleChange, handleBlur }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
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