// const url = 'http://127.0.0.1:8000/api/'
// let idUser = 11
// let newUser = {
//     id: idUser,
//     name: 'Teste',
//     user: 'c@c',
//     password: '12345678'
// }

// let updateUserData = {
//     name: 'Teste3',
//     user: 'c@c',
//     password: '12345678'
// }


async function getUsers () {
     const response = await axios.get("http://localhost:8000/api/cidades/")
     console.log(JSON.stringify(response.data))
}


// function setUsers () {
//     axios.post(url, newUser).then( response => alert(response.data))
// }

// function updateUser (id) {
//     axios.put(url+'/'+id, updateUserData).then()
// }

// getUsers()

// setUsers()