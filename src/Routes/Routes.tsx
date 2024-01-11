import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Loguin';
import { FormScreen } from '../pages/formScreen';
import { CadastroScreen } from '../pages/cadastroScreen';

export function RoutesLoguin () {
    const {Navigator, Screen} = createNativeStackNavigator()

    return (
        <Navigator
          initialRouteName='Home'
          screenOptions={{
            contentStyle : {
                backgroundColor: 'white',
                paddingTop: 32,
                paddingHorizontal: 16,
                paddingBottom: 16
            },
            headerShown: false,
          }}
        >
            <Screen name='Home' component={Home} />
            <Screen name='singIn' component={CadastroScreen} />
        </Navigator>
    )
}