import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { FormScreen } from '../pages/formScreen';

export function Routes () {
    const {Navigator, Screen} = createNativeStackNavigator()

    return (
        <Navigator>
            <Screen name='Home' component={Home} />
            <Screen name='Form' component={FormScreen} />
        </Navigator>
    )
}