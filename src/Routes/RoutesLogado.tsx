import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormScreen } from '../pages/formScreen';

export function RoutesLogado () {
    const {Navigator, Screen} = createNativeStackNavigator()

    return (
        <Navigator
          initialRouteName='Form'
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
            <Screen name='Form' component={FormScreen} />
        </Navigator>
    )
}