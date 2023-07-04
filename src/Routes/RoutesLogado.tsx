import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormScreen } from '../pages/formScreen';
import { Menu } from '../pages/menu';
import { ChangeNameScreen } from '../pages/changeName';

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
            headerShown: false
          }}
        >
            <Screen name='Form' component={FormScreen} />
            <Screen name='Menu' component={Menu}/>
            <Screen name='ChangeName' component={ChangeNameScreen}/>
        </Navigator>
    )
}