/*A promise is an Object that may produce a 
single value some time in the future*/
// - States
//      - Fullfield
//      - Rejected
//      - Pending

//Callback pyramid of doom -> Promise
movePlayer(100, "Left", () =>{
    movePlayer(400, "Right", () =>{
        movePlayer(50, "Up", () =>{

        })
    })
})

movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10, "Up"))


/**
 * Example
 */
const promise = new Promise((resolve, reject) => {
    if(false){
        resolve("Stuffed worked");
    }
    else{
        reject("Error");
    }
})

promise // -> "Error"
    .then(result => console.log(result))

/**
 * Chaning Promises
 */
promise // -> "Error!"
    .then(result => result + "!")
    .then(response => console.log(response))

/**
 * Caching Error
 */
promise
    .then(result => {
        throw Error
    })
    .catch(() => console.log("error")) // Catch any error

//Catch catches any errors before it

/**
 * SetTimeOut && Promise.all()
 */
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HII") // -> resolve("HII")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hola") // -> resolve("Hola")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Halo") // -> resolve("Halo")
})

//Solo se resuelve si todas las promesas lo hacen
Promise.all([promise2, promise3, promise4])
.then(values => {
    values.map(value =>{
        console.log(value);
    })
}) // -> Hii; Hola; Halo    (3s)

/**
 * Exercises
 */

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const Promise4Seconds = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "success")
})

// #2) Run the above promise and make it console.log "success"
Promise4Seconds.then(result => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("success").then(result => console.log(result))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log("Pene"))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise
    .all(urls.map(url => fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls = [
    'http://swapi.dev/api/peple/1', //WrongRighten
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
Promise.all(urls.map(url => fetch(url).then(response => response.json())
    ))
    .catch("Pene2")
