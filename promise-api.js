const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1 ...');
        resolve(1);
    }, 2000);
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2 ...');
        resolve(2);
    }, 2000);
})

// when we want just one of the promises is finish 
Promise.race([p1,p2]).then((result) => console.log('result is =>' , result) )
.catch((err) => console.log('Error' , err.message) )

// wait until all the promises is done
// Promise.all([p1,p2]).then((result) => console.log('result is =>' , result) )
// .catch((err) => console.log('Error' , err.message) )