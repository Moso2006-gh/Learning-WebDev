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
    try{
        const [users, post, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(response => response.json())
        ))
        console.log("users", users);
        console.log("post", post);
        console.log("albums", albums);
    }
    catch (err) {
        console.log("F", err)
    }
}

/**
 * Exercises
 */

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

const fetchSync = async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    .then((resp) => resp.json())
    console.log(response);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  let [users, posts, albums] = await Promise.all(
    urls.map((url) => {
        const info = fetch(url)
        return info.json()
    }
  ))
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
    try{
        let [users, posts, albums] = await Promise.all(
            urls.map((url) => {
                const info = fetch(url)
                return info.json()
            }
        ));
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
    }
    catch(err){
        console.log("Pinche Lafa esta aqui otra vez:", err);
    }
}