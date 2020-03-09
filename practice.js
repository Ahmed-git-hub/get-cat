function excute(){
document.getElementById('getUsersAPI').addEventListener('click', getUsers)
}

function getUsers(){
    fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then (res => res.json())
    .then (data => console.log(data))
}