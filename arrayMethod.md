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

