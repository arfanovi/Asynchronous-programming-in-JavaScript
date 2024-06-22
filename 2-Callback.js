const Person = [
    {Name: 'Ovi', Address: 'Dhaka Bangladesh', Chamber: 'Mirpur', Message: 'arfanovi@gmail.com', Phone: '01766915101', body: "Body 1"},
    {Name: 'Jhon', Address: 'Rangpur Bangladesh', Chamber: 'Panchagarh', Message: 'jhon@gmail.com', Phone: '01717700926', body: "Body 2"}
];

// Declare Function 
function getPersonPost() {
    setTimeout(()=>{
        let output = '';
        Person.forEach((man, index) => {
            output += `<h2>${man.Name}</h2>`;
            output += `<i>${man.Address}</i>`;
            output += `<p>${man.Chamber}</p>`;
            output += `<p>${man.Message}</p>`;
            output += `<p>${man.Phone}</p>`;
        });
        document.getElementById('PersonList').innerHTML = output;
    }, 1000);
}

// Another Function with Create 
// Callback Operation 
function createPerson(man, callback){
    setTimeout(()=>{
        Person.push(man);
        callback();
    }, 2000);
}

// Add a new person and then display the updated list

// Callback Operation 

createPerson(
    {Name: 'Arfan', Address: 'Dhaka Bangladesh', Chamber: 'Mirpur', Message: 'arfanovi@gmail.com', Phone: '01766915101', body: "Body 3"},
    getPersonPost
);
