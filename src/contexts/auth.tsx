import React, {createContext, useState, useEffect} from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
    user: string,
    password: string
}

interface AuthContextProps {
    signed: boolean;
    user: User | null ;
    signIn(): Promise<void>;
    signOut(): void;
}

interface props {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps );

export const AuthProvider = (children : props ) => {
    const [user, setUser] = useState<User | null >(null)

    useEffect(() => {
        async function loadStorageData () {
            const storageUser = await AsyncStorage.getItem('@validacaoDeDados:user');
            const storageToken = await AsyncStorage.getItem('@validacaoDeDados:token');

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser))
            }
        }

        loadStorageData()
    }, [])

    async function signIn () {
        const response = await auth.signIn()

        setUser(response.user)

        await AsyncStorage.setItem('@validacaoDeDados:user', JSON.stringify(user));
        await AsyncStorage.setItem('@validacaoDeDados:token', response.token);
    }
    
    function signOut () {
        AsyncStorage.clear().then(() =>{
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}} >
            {children.children}
        </AuthContext.Provider>
    )
};
