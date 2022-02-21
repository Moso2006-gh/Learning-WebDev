/**
 * ASYNC AWAIT
 */

//Makes code easyer to read
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10, "Up"))
    .then(() => movePlayer(100, "Right"))

//Promise = I ow you 
//Sintactic sugar = same sintaxe but better
async function playerStart() {
    const first = await movePlayer(100, "Left");
    await movePlayer(400, "Left");
    await movePlayer(10, "Right")
}

//Example
fetch("https://jsonplaceholder.typicode.com/albums")
.then(resp => resp.json())
.then(resp2 => console.log(resp2))

async function fetchUsers(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await resp.json();
    console.log(data);
}

//Example2
const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
Promise.all(urls.map(url => 
    fetch(url).then(response => response.json())
    .then(response => console.log(response))
))

const getData = async function() {
    const [users, post, albums] = await Promise.all(urls.map(url => 
        fetch(url).then(response => response.json())))
    
}