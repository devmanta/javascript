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