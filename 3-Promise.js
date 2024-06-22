function Num1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1');
            resolve();
        }, 1000);
    });
}

function Num2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2");
            resolve();
        }, 1500);
    });
}

function Num3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3");
            resolve();
        }, 2000);
    });
}

function Num4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4");
            resolve();
        }, 2500);
    });
}

function Num5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5");
            resolve();
        }, 3000);
    });
}



Num1()
    .then(Num2)
    .then(Num3)
    .then(Num4)
    .then(Num5)
    .then(() => {
        console.log('All done!');
    });


    