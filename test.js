function summation(arr) {
    let sum = 1
    function summer() {
        for(let i = 0; i < arr.length; i++){
            sum *= arr[i];
        }
    } 
    summer();
    return sum;
}

/////////

let callback = function() {
    console.log("It has been 5 seconds!");
};

let timetowait = 2000

global.setTimeout(() => {console.log("It has been 3 sec!")}, timetowait)
global.setTimeout(function() {console.log("It has been 3 sec!")}, timetowait)

////////

let result = [2,4,6]
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue;
    }
    result.push(i);
}

console.log(result);
global.setTimeout(() => {console.log(summation(result))}, timetowait)


function Kitten(name, age) {
    this.name = name;
    this.age = age;
}

Kitten.prototype.meow = function () {
    console.log(this.name + ' says "meow!"')
};

k1 = new Kitten("Dan", 2);
Object.getPrototypeOf(k1));

console.log(k1)
