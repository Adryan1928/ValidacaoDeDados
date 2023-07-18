import React from "react";
import { instance } from "../Hooks/instance";
import { Usuario } from "../contexts/auth";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useAuth } from "../Hooks/useAuth";

export function setName (name: string | undefined){
    const { user } = useAuth()
    if (user != null && name != undefined )  {
        user.name = name
    }
    const queryClient = useQueryClient()
    return useMutation(() => instance.put(`/users/${user?.id}/`, user), {
        onSuccess: () => { queryClient.invalidateQueries('users') }
    })
}

