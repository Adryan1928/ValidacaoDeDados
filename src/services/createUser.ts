import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { instance } from "../Hooks/instance";
import { Usuario } from "../contexts/auth";

export function createUser(userCreating : Usuario){
    const queryClient = useQueryClient()
    return useMutation(() => instance.post('users/', userCreating), {
            onSuccess: () => { queryClient.invalidateQueries('users') }
    })  
}