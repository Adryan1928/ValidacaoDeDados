import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { InputField } from '../components/input';
import { Header } from '../components/header';
import { Steps } from '../components/steps';

function renderStep(step: number) {
    switch (step) {
        case 0:
            return <InputField name='nome' label='Digite seu nome'  />
        case 1:
            return <InputField name='idade' label='Digite sua idade'  />
        default:
            return <Text>Not Found</Text>
    } 
}

export function FormScreen() {
    const [currentStep, setCurrentStep]  = useState(0)

    const schema = [
        yup.object().shape({
            nome: yup.string().required('Digite algo')
        }),
        yup.object().shape({
            idade: yup.number().required('Digite algo')
        })
    ]

    const initialValues = {
        nome: '',
        idade: ''
    }

    function handleStep () {
        currentStep < 1 && setCurrentStep(1)
    }

    function handleback() {
        setCurrentStep(currentStep-1)
    }
    return (
        <View>
            <Header page='Form'/>
            <Steps currentStep={currentStep} />
            <Text>Loguin</Text>
            <Formik
                onSubmit={() => {handleStep()}}
                initialValues={initialValues}
                validationSchema={schema[currentStep]}
            >
                {({ handleSubmit }) => (
                        <View>
                            {renderStep(currentStep)}

                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 24}} >
                                <Button title='voltar' disabled={currentStep===0} onPress={handleback} />
                                <Button title={currentStep < 1 ? 'Próximo': 'Enviar'} onPress={() => handleSubmit()} />
                            </View>
                        </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: '#ab9393',
        borderColor: '#bdbcbc',
        borderWidth: 2,
        width: 300,
        borderRadius: 5,
        padding: 5,

    }
})