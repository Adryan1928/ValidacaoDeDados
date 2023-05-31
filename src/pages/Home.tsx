import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNavigator } from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

export function Home () {
    const navigation = useNavigation()



    return (
        <View>
            <Text>Bem vindo</Text>
            <Button title='Ir para próxima página' onPress={() => {navigation.navigate('Form' as never)}} />
        </View>
    )
}