

// Declacre Function 
function fetchData(){
    return new Promise((resolve, reject )=>{
        setTimeout(()=>{
            resolve('Data fetched')
        },1500)
    })
}

async function displayData() {
    try {
        const data = await fetchData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

displayData()