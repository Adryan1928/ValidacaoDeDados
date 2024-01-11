import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { InputField } from "../components/input";
import { Formik } from "formik";
import { createUser } from "../services/createUser";
import { useQueryClient } from "react-query";
import { Usuario } from "../contexts/auth";
import { useNavigation } from "@react-navigation/native";


export function CadastroScreen(){
    const queryClient = useQueryClient()
    const usersQuery = queryClient.getQueriesData<Usuario[]>(['users'])
    const users = usersQuery[0][1]
    const [create, setCreate] = useState(true)
    const [error, setErro] = useState('')
    const [userCreating, setUserCreating] = useState({} as Usuario )
    const {isLoading, mutate, isSuccess} = createUser(userCreating)
    const navigation = useNavigation()

    const initialValuesUser = {
        name: '',
        user: '',
        password: '',
        confPassword: ''
    }

    function handleSubmit(values : {
            name: string,
            user: string,
            password: string,
            confPassword: string
        }){
        
        if (values.password != values.confPassword){
            setErro('A senha não está igual a confirmar senha')
        }

        setUserCreating({name: values.name, user: values.user, password: values.password, id: 0})
        
        

        users.map((user => {
            if (user.user == userCreating.user){
                setCreate(false)
            }

            userCreating.id = user.id + 1
        }))

        if (create){
            mutate()

            if (isSuccess) {
                setErro('Cadastrado com sucesso')
            }
            
        }else{
            setErro('Email inválido')
        }
    }

    function handleLogin() {
        navigation.navigate('Home' as never)

    }
    
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Cadastre-se</Text>
            <View>
                <Formik
                    initialValues={initialValuesUser}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({handleSubmit}) => (
                        <View  style={styles.form} >
                            <InputField name="name" label="Digite seu nome" />
                            <InputField name="user" label="Digite seu email" />
                            <InputField name="password" label="Digite sua senha" />
                            <InputField name="confPassword" label="Confirma senha" />
                            <View style={{justifyContent: 'flex-end'}} >
                                <Button title={ isLoading? 'Carregando...' : 'Cadastrar' } onPress={() => handleSubmit()} />
                            </View>
                        </View>
                    )
                    }
                </Formik>
            </View>

            <Text style={styles.footerText} >Já tem uma conta? <TouchableOpacity onPress={() => handleLogin()} >
                    <Text style={styles.footerLink}>Entrar</Text>
                </TouchableOpacity>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 32
    },
    title: {
        fontSize: 32,
        color: '#000',
        textAlign: 'center'
    },
    form : {
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center'
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