//allSettled
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
})

Promise.allSettled([promise1, promise2])
.then(data => console.log(data))
.catch(e => console.log("ayudaaa", e)) // Doesnt work

//Any -> any promise resolve