import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAuth } from "../Hooks/useAuth";

import img from '../styles/img/unnamed(19).png'
import { useNavigation } from "@react-navigation/native";

interface pageProps {
    page: string
}

export function Header({page}: pageProps) {
    const {user} = useAuth()
    const navigation = useNavigation()

    function handleMenu() {
        navigation.navigate('Menu', {page})
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text>Olá, {user?.name}</Text>
            <TouchableOpacity onPress={handleMenu} >
                <Image source={img} style={{height:30, width:30}} ></Image>
            </TouchableOpacity>
        </View>
    )
}