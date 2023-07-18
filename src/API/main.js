const url = 'http://192.168.1.100:5000/users'
let idUser = 11
let newUser = {
    id: idUser,
    name: 'Teste',
    user: 'c@c',
    password: '12345678'
}

let updateUserData = {
    name: 'Teste3',
    user: 'c@c',
    password: '12345678'
}


function getUsers () {
    axios.get(url+'/4').then(response => results.textContent = JSON.stringify(response.data) )
}


function setUsers () {
    axios.post(url, newUser).then( response => alert(response.data))
}

function updateUser (id) {
    axios.put(url+'/'+id, updateUserData).then()
}

getUsers()

// setUsers()