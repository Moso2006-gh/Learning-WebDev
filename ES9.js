//Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
}
const {tiger, ...rest} = animals;

const array = [1,2,3,4,5];
const sum = (a, b, c, d, e) => {
    return a + b + c + d + e;
}
console.log(sum(...array))

//finally
fetch("aaa")
.then(a => a.json())
.then(a2 => console.log(a2))
.catch(err => console.log("Error"))
.finally(() => console.log("Extra")) // SIEMPRE se llama al final

//for awair of
const loopThroughUrls = url => {
    for (url of urls){
        console.log(url)
    }
}

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]

const getData2 = async function() {
    try{
        const arrOfPromises = urls.map(url => fetch(url));
        for await (let request of arrOfPromises){
            const data = await request.json();
            console.log(data);
        }
    }
    catch (err){
        console.log("Error: ", err);
    }
}