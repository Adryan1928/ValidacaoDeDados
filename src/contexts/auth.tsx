import React, {createContext, useState, useEffect} from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { boolean } from "yup";

interface User {
    user: string,
    password: string
}

interface AuthContextProps {
    signed: boolean;
    user: User | null ;
    error: boolean;
    signIn(user?:User): Promise<void>;
    signOut(): void;
}

interface props {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps );

export const AuthProvider = (children : props ) => {
    const [user, setUser] = useState<User | null >(null)
    const [error, setError] = useState(false)

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

    async function signIn ({ password, user }: User) {
        const response = await auth.signIn()

        if (password == response.user.password && user == response.user.user){
            setUser(response.user)

            await AsyncStorage.setItem('@validacaoDeDados:user', JSON.stringify(response.user));
            await AsyncStorage.setItem('@validacaoDeDados:token', response.token);
        } else {
            setError(true)
        }
    }
    function signOut () {
        AsyncStorage.clear().then(() =>{
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, error, signIn, signOut}} >
            {children.children}
        </AuthContext.Provider>
    )
};
