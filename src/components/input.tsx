import { useField } from 'formik';
import React from 'react';
import { TextInput, TextInputProps, View, Text, StyleSheet } from 'react-native';


interface Props extends TextInputProps {
    name : string,
    label?: string
}

export function InputField ({name, label, ...rest} : Props) {

    const [field, meta, helpers] = useField({name})
    const error = meta.touched && meta.error
    return (
        <View>
            <Text>{label}</Text>

            <TextInput
                style={styles.Input}
                placeholder='Digite aqui'
                value={meta.value}
                onChangeText={helpers.setValue}
                onBlur={() => helpers.setTouched(true)}
                {...rest}
            />
            {error && <Text style={styles.error} >{meta.error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    Input : {
        backgroundColor: '#d0cece',
        borderColor: '#aba9a9',
        borderWidth: 2,
        width: 300,
        borderRadius: 5,
        padding: 5,
    },
    error: {
        color: '#a71b1b'
    }
})