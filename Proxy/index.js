const person = {
    name: "Zuha",
    age: 100,
    city: "Allahabad"            
};
const handler = {
    get:(target,prop,receiver)=>{
        // console.log(`Getting prop: ${prop}`);
        return target[prop];
    },
    set: (obj, prop, value) => { // value is the new value that is  assigned to the property
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
      }
}
const personProxy = new Proxy(person,handler);
personProxy.name = "Zuha1111111111";
console.log(personProxy.name);