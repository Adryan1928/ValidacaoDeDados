import React from "react";
import { View, Text, Button } from "react-native";
import { InputField } from "../components/input";
import { Formik  } from "formik";
import { useAuth } from "../Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "react-query";
import { queryClient } from "../services/queryClient";
import { Usuario } from "../contexts/auth";

interface valueProps {
    name: string | undefined
}

export function ChangeNameScreen () {
    const { user } = useAuth()
    const navigation = useNavigation()

    // Resgatando dados dos usuários com o cache do react Query
    // const usersQuery = queryClient.getQueriesData<Usuario[]>(['users'])
    // const users = usersQuery[0][1]
    // console.log(users)

    const values = {
        name: user?.name
    }

    function handleVoltar ( value : valueProps ) {
        console.log(value)
        navigation.navigate('Menu' as never, { page: 'Form' } as never)
    }

    return (
        <View>
            <Text>Trocar nome do Usuário</Text>
            <Formik
                initialValues={values}
                onSubmit={(value) => handleVoltar(value)}
            >
                {({handleSubmit}) => (
                    <View>
                        <InputField name="name" label="Digite seu novo nome" />
                        <Button title="Trocar" onPress={() => handleSubmit()} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
