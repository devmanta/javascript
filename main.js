//Constructor function
function User(email, birthday){
    this.email = email;
    this.birthday = birthday;
    this.buy = function(item){
        console.log(`${this.email} bought ${item}`);
    }
}

const item = 'plugins';
const user = new User('heejin@heejin.com', '1900-01-01');
user.buy(item);

//Class
class People{
    constructor(lastname, birthdate){
        this.lastname = lastname;
        this.birthdate = birthdate;
    }

    introduce(item){
        console.log(`${this.lastname} was born in ${this.birthdate} and he/she likes ${item}`);
    }
}

const person = new People('heejin', '2000-01-01');
person.introduce('coding');

//Array.prototype

//extends
class Child extends People{
    constructor(lastname, birthdate, gender){
        super(lastname, birthdate);
        this.gender = gender;
    }

    goToSchool(school){
        console.log(`${this.gender}`);
    }
}

const child = new Child('jin', 'jin@jin', 'male');
child.goToSchool('test');

//static
class Dream{
    static TARGET = 'mantaRays';

    static getMyDream(){
        return 'My dream is to meet mantaRays!!';
    }
}

console.log(Dream.getMyDream());


//Arrow Function
const addFive = number => number +5;
console.log(addFive(0));

const concat = (str1, str2) => {
    return str1 + str2;
}

console.log(concat('manta', 'Rays'));

const getMantas = () => ({name: 'Manta Rays'});
console.log(getMantas());


//Json parsing
//GET
fetch('response url')
    .then((response)=> response.text())
    .them((result)=> {
    const jsonData = JSON.parst(result);
    //to get specific data
    const tshirtsList = jsonData.filter((shoppinglist)=> shoppinglist.item === 'T-shirts');
    console.log(tshirtsList);
});

//POST
const newColor = {
    name: 'white',
    hex: '#FFFFFF'
}
//option object
fetch('response url'{
    method: 'POST',
    body: JSON.stringify(newColor),
    headers: { 'Content-Type': 'application/json' }
})
    .then((response)=> response.text())
    .then((result) => {
        console.log(result);
    })