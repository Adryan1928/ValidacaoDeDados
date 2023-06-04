import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { FormScreen } from '../pages/formScreen';

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
        </Navigator>
    )
}