const _ = require('lodash')

function sayHello(name) {
    console.log("hello : " + name);
}
function splitArr(arr, num) {
    return _.chunk(arr, num)
}

exports.sayHello = sayHello
exports.splitArr = splitArr