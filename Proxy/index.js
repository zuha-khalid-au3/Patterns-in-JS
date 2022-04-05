const person = {
    name: "Zuha",
    age: 100,
    city: "Allahabad"            
};

const personProxy = new Proxy(person,{});

console.log(personProxy.name);