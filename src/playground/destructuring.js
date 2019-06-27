//
// object destructuring
//
const person = {

    name :'gar',
    age:27,
    location: {
        city: 'philadelphia',
        temp:88
    }

};

const {name:firstName = "Anonymous", age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature } = person.location;
if(city && temperature){
    console.log (`it is ${temperature} in ${city}.`);
}

console.log('---------------------------------');


/////

//
// Array destructuring
//

const address = ['test1','test2','test3'];
const[tt1,tt2,tt3,tt4='cost'] = address;

console.log(`${tt1} ------ ${tt2}--- ${tt3} --- ${tt4}`);