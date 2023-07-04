import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../Hooks/useAuth";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
    page: string
}

export function Menu() {
    const {signOut} = useAuth()
    const navigation  = useNavigation()
    const route = useRoute()

    const {page} = route.params as Params 

    function handleVoltar(){
        navigation.navigate(page as never)
    }

    function handleChangeName() {
        navigation.navigate('ChangeName' as never)
    }

    return (
        <View style={{gap:16}} >
            <View>
                <Text style={{fontSize:32}} >Menu</Text>
                <View style={{height:2, backgroundColor: '#aaaaa'}}></View>
            </View>
            <View>
                <TouchableOpacity onPress={handleVoltar} >
                    <Text style={{fontSize:16}} >Voltar</Text>
                </TouchableOpacity>
                <View style={{height:2, backgroundColor: '#aaaaa'}}></View>
            </View>
            <View>
                <TouchableOpacity onPress={handleChangeName} >
                    <Text style={{fontSize:16}} >Trocar nome</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={signOut} >
                    <Text style={{fontSize:16, color: '#d81515'}} >Sair</Text>
                </TouchableOpacity>
                <View style={{height:2, backgroundColor: '#aaaaa'}}></View>
            </View>
        </View>
    )
}