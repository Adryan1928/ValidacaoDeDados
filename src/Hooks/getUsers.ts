import { useQuery } from "react-query"
import { instance } from "./instance"


export function getUsers (){
    const data = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            const response = instance.get('/users')
            return response
        },
        staleTime: 30 * 1000
    })
    return data
}