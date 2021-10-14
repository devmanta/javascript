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