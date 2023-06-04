import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesLoguin } from './Routes';
import { RoutesLogado } from './RoutesLogado';
import { AuthContext } from '../contexts/auth';

export function Routes () {
    const { signed } = useContext(AuthContext)

    return (
        <NavigationContainer>
            {signed ? <RoutesLogado/> : <RoutesLoguin/>}
        </NavigationContainer>
    )
}