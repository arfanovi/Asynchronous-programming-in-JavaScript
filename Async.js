// Suppose Normal Js Code 
function Person1(){
    console.log('Jhon');
}

function Person2(){
    console.log('Ovi')
}

function Person3(){
    setTimeout(() => {
        console.log('Jhon')
    }, 1000)
    console.log('Doe')
}

function Person4(){
    console.log('Ali')
}

Person1();
Person2();
Person3();

