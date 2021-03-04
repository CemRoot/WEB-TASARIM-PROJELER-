function User(name,work){

    this.name = name;
    this.work = work;
    this.displayInfo = function(){

    }
}
User.prototype.sayHi = function(){
    console.log(`Hello, my name is ${this.name}. I work at ${this.work}`);
};

module.exports = User;