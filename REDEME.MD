npmcj 对数组进行截取
```
const _ = require('lodash')

function sayHello(name) {
    console.log("hello : " + name);
}
function splitArr(arr, num) {
    return _.chunk(arr, num)
}

```