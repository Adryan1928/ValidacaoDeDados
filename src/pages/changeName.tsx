import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { InputField } from "../components/input";
import { Formik  } from "formik";
import { useAuth } from "../Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { setName } from "../services/setName";

interface valueProps {
    name: string
}

export function ChangeNameScreen () {
    const { user } = useAuth()
    const navigation = useNavigation()
    const [namee, setNamee] = useState<string | undefined>('')
    const { isLoading, mutate } = setName(namee)

    // Resgatando dados dos usuários com o cache do react Query
    // const usersQuery = queryClient.getQueriesData<Usuario[]>(['users'])
    // const users = usersQuery[0][1]
    // console.log(users)

    const values = {
        name: user?.name
    }

    function handleVoltar (values:{name: string | undefined}) {
        setNamee(values?.name)
        mutate()

        navigation.navigate('Menu', { page: 'Form' })
    }



    return (
        <View>
            <Text>Trocar nome do Usuário</Text>
            <Formik
                initialValues={values}
                onSubmit={(values) => handleVoltar(values)}
            >
                {({handleSubmit}) => (
                    <View>
                        <InputField name="name" label="Digite seu novo nome" />
                        <Button title={ isLoading? 'Carregando' :"Trocar"} onPress={() => handleSubmit()} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
