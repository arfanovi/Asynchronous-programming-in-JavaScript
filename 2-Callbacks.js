function Num1(callback){
    setTimeout(()=>{
        console.log('1')
    },1000)
    callback()
}

function Num2(callback){
    setTimeout(()=>{
        console.log("2")
    },1500)
    callback()
}
function Num3(callback){
    setTimeout(()=>{
        console.log("3")
    },2000)
    callback()
}

function Num4(callback){
    setTimeout(()=>{
        console.log("4")
    },2500)
    callback()
}
function Num5(callback){
    setTimeout(()=>{
        console.log("5")
    },3000)
    callback()
}

// Num1();

Num1(()=>{
    Num2(()=>{
        Num3(()=>{
            Num4(()=>{
                Num5(()=>{
                    setTimeout(()=>{
                        console.log("all num added")
                    },3500)
                })
            })
        })
    })
})