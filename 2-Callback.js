/*
function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched');
      console.log('Hey')
    }, 4000);
  }
  
  fetchData((data) => {
    console.log('Hello')
    console.log(data);  
  });
  */

const Person = [
    {Name: 'Ovi', Address: 'Dhaka Bangladesh', Chamber: 'Mirpur', Message: 'arfanovi@gmail.com', Phone: '01766915101', body: "Body 1"},
    {Name: 'Jhon', Address: 'Rangpur Bangladesh', Chamber: 'Panchagarh', Message: 'jhon@gmail.com', Phone: '01717700926', body: "Body 2"}

]

// Declare Function 
function getPersonPost() {
    setTimeout(()=>{
        let output = '';
        Person.map((man,index)=>{
            output = output + `<h2>${man.Name}</h2>`
            output = output + `<i>${man.Address}</i>`
            output = output + `<p>${man.Chamber}</p>`
            output = output + `<p>${man.Message}</p>`
            output = output + `<p>${man.Phone}</p>`
        })
        document.getElementById('PersonList').innerHTML = output;
    }, 1000)

}

getPersonPost()