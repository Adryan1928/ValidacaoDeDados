import { useQuery } from "react-query"
import { instance } from "../Hooks/instance"


export function getUsers (){
    let users
    const data = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await instance.get('/users')
            return response.data
        },
        staleTime: 30 * 1000
    })
    return data
}