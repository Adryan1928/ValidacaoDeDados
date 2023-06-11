import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsers } from "../Hooks/getUsers";

interface User {
    user: string,
    password: string
}

interface Usuario {
    id: number,
    name: string,
    user: string,
    password: string
}

interface AuthContextProps {
    signed: boolean;
    user: Usuario | null ;
    error: boolean;
    signIn(user?:User): Promise<void>;
    signOut(): void;
}

interface props {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps );

export const AuthProvider = (children : props ) => {
    const [user, setUser] = useState<Usuario | null >(null)
    const [error, setError] = useState(false)

    const {data} = getUsers()

    useEffect(() => {
        async function loadStorageData () {
            const storageUser = await AsyncStorage.getItem('@validacaoDeDados:user');
            const storageToken = await AsyncStorage.getItem('@validacaoDeDados:token');

            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }

        loadStorageData()
    }, [])

    async function signIn ({ password, user }: User) {
        for (let usuario of data?.data){
            if (password == usuario.password && user == usuario.user){
                setUser(usuario)

                await AsyncStorage.setItem('@validacaoDeDados:user', JSON.stringify(usuario));
                // await AsyncStorage.setItem('@validacaoDeDados:token', response.token);
            }
        }

        setError(true)


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
