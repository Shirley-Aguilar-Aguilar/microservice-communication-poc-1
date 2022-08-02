import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/todos';
let data = {
    nombre: 'Robert',
    alias: 'Rob',
    edad: 18
}

let config = {
    headers: {
        Authorization: 'bearer aks',
    }
}
axios.post(url, data).then((response) => {
    console.log(response.data)
    return response.data;
});