// function Num1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('1');
//             resolve();
//         }, 1000);
//     });
// }

// function Num2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("2");
//             resolve();
//         }, 1500);
//     });
// }

// function Num3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("3");
//             resolve();
//         }, 2000);
//     });
// }

// function Num4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("4");
//             resolve();
//         }, 2500);
//     });
// }

// function Num5() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("5");
//             resolve();
//         }, 3000);
//     });
// }



// Num1()
//     .then(Num2)
//     .then(Num3)
//     .then(Num4)
//     .then(Num5)
//     .then(() => {
//         console.log('All done!');
//     });
















/*

    function Num1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log('1 - Success');
                    resolve(true);
                } else {
                    console.error('1 - Failure');
                    reject(false);
                }
            }, 1000);
        });
    }
    
    function Num2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log("2 - Success");
                    resolve(true);
                } else {
                    console.error("2 - Failure");
                    reject(false);
                }
            }, 1500);
        });
    }
    
    function Num3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log("3 - Success");
                    resolve(true);
                } else {
                    console.error("3 - Failure");
                    reject(false);
                }
            }, 2000);
        });
    }
    
    function Num4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log("4 - Success");
                    resolve(true);
                } else {
                    console.error("4 - Failure");
                    reject(false);
                }
            }, 2500);
        });
    }
    
    function Num5() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log("5 - Success");
                    resolve(true);
                } else {
                    console.error("5 - Failure");
                    reject(false);
                }
            }, 3000);
        });
    }
    

*/




/*
function Num1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num1 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num1 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 1000);
    });
}

function Num2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num2 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num2 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 1500);
    });
}

function Num3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num3 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num3 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 2000);
    });
}

function Num4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num4 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num4 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 2500);
    });
}

function Num5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num5 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num5 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 3000);
    });
}

*/















/*



function Num1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num1 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num1 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 1000);
    });
}

function Num2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num2 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num2 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 1500);
    });
}

function Num3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num3 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num3 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 2000);
    });
}

function Num4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num4 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num4 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 2500);
    });
}

function Num5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            const isSuccess = randomNum > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                console.log(`Num5 - Success, Random Number: ${randomNum}`);
                resolve(true);
            } else {
                console.error(`Num5 - Failure, Random Number: ${randomNum}`);
                reject(false);
            }
        }, 3000);
    });
}

Num1()
    .then(Num2)
    .then(Num3)
    .then(Num4)
    .then(Num5)
    .catch((error) => {
        console.error('An error occurred:', error);
    })
    .finally(() => {
        console.log('All done!');
    });


    */



    // Using async/await with try-catch and Ensuring "All done!"

    function Num1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNum = Math.random();
                const isSuccess = randomNum > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log(`Num1 - Success, Random Number: ${randomNum}`);
                    resolve(true);
                } else {
                    console.error(`Num1 - Failure, Random Number: ${randomNum}`);
                    reject(false);
                }
            }, 1000);
        });
    }
    
    function Num2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNum = Math.random();
                const isSuccess = randomNum > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log(`Num2 - Success, Random Number: ${randomNum}`);
                    resolve(true);
                } else {
                    console.error(`Num2 - Failure, Random Number: ${randomNum}`);
                    reject(false);
                }
            }, 1500);
        });
    }
    
    function Num3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNum = Math.random();
                const isSuccess = randomNum > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log(`Num3 - Success, Random Number: ${randomNum}`);
                    resolve(true);
                } else {
                    console.error(`Num3 - Failure, Random Number: ${randomNum}`);
                    reject(false);
                }
            }, 2000);
        });
    }
    
    function Num4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNum = Math.random();
                const isSuccess = randomNum > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log(`Num4 - Success, Random Number: ${randomNum}`);
                    resolve(true);
                } else {
                    console.error(`Num4 - Failure, Random Number: ${randomNum}`);
                    reject(false);
                }
            }, 2500);
        });
    }
    
    function Num5() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNum = Math.random();
                const isSuccess = randomNum > 0.5; // Randomly succeed or fail
                if (isSuccess) {
                    console.log(`Num5 - Success, Random Number: ${randomNum}`);
                    resolve(true);
                } else {
                    console.error(`Num5 - Failure, Random Number: ${randomNum}`);
                    reject(false);
                }
            }, 3000);
        });
    }
    
    async function runSequentially() {
        try {
            await Num1();
            await Num2();
            await Num3();
            await Num4();
            await Num5();
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            console.log('All done!');
        }
    }
    
    runSequentially();
    