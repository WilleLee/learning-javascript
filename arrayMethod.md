## Methods used for data type: Arrays

### [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at, "mdn references")

양/음의 정수 또는 0 value를 취해 해당 index의 item을 return 한다.

#### Examples

`let array = ['a', 'b', 'c', 'd', 'e'];`

`console.log(array.at(0)); // expected output = 'a'`

`console.log(array.at(-1)); // expected output = 'e'`

---

### [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat, "mdn references")

둘 이상의 arrays를 하나의 array로 합친다.

#### Examples

`let arrayPopcorn = ['pop', 'corn'];`

`let arrayConcat = array.concat(arrayPopcorn);`

`console.log(arrayConcat); // expected output = ['a', 'b', 'c', 'd', 'e', 'pop', 'corn']`

---

### [Array.prototype.copyWithin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin, "mdn references")

Array의 일정 부분을 다른 위치에 복붙한다. 이때 array의 길이는 변화하지 않는다.

#### Syntax

`Array.prototype.copyWithin(target) // 해당 지점부터 array를 index 0부터 반복`

`Array.prototype.copyWithin(target, start) // array의 start index 값부터 끝까지의 items를 target 지점부터 반복`

`Array.prototype.copyWithin(target, start, end) // array의 start index값부터 end 이전 index값까지의 items를 target 지점부터 반복`

#### Examples

`console.log(array.copyWithin(2)); // expected output = ['a','b','a','b','c']`

`console.log(array.copyWithin(1,3)); // expected output = ['a','d','e','d','e']`

`console.log(array.copyWithin(1,2,4)); // expected output = ['a','c','d','d','e']`

---

### [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every, "mdn references")

Callback function을 이용해 한 array의 모든 elements가 특정 조건을 통과하는지 여부를 판단하여 boolean value를 return 한다.

#### Syntax

`Array.prototype.every( callbackFn (element) { /* ... */ } )`

`Array.prototype.every( callbackFn (element, index) { /* ... */ } )`

`Array.prototype.every( callbackFn (element, index, array) { /* ... */ } )`

#### Examples

`let arrayNum1 = [22,45,66,16,82];`

`console.log( arrayNum1.every( (element)=>{ return element >= 10 } ) ); // expected output = true`

`let arrayNum2 = [22,45,6,14,62];`

`console.log( arrayNum2.every( (element)=>{ return element >= 10 } ) ); // expected output = false`

---

### [Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill, "mdn references")

한 array를 고정된 value로 채워넣는다. 두 번째 parameter에 시작 index를(default = 0), 세 번째 parameter에 마지막 index를(default = array.length) 추가할 수 있다.

#### Syntax

`Array.prototype.fill(value)`

`Array.prototype.fill(value, startIndex)`

`Array.prototype.fill(value, startIndex, endIndex)`

#### Examples

`console.log(array.fill(1)); // expected output = [1,1,1,1,1]`

`console.log(array.fill(1, 2)); // expected output = ['a', 'b', 1, 1, 1]`

`console.log(array.fill(1, 2, 4)); // expected output = ['a', 'b', 1, 1, 'e']`

---

### [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter, "mdn references")

Callback function을 이용해 한 array에서 특정 조건을 통과한 elements로 새로운 array를 만든다.

#### Syntax

`Array.prototype.filter( callbackFn(element){ /* ... */ } )`

`Array.prototype.filter( callbackFn(element, index){ /* ... */ } )`

`Array.prototype.filter( callbackFn(element, index, array){ /* ... */ } )`

#### Examples

`let arrayToFilter = ['constructive','sailing','pumpkinspicelatte','ipad','handsomedude'];`

`console.log( arrayToFilter.filter( (element)=>{ return element.length >= 10 } ) );`

`// expected output = ['constructive', 'pumpkinspicelatte', 'handsomedude']`

---

