## data type: String의 methods

### [String.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at, "browse mdn references")

주어진 String의 특정 정수 번째 문자를 반환한다. 양의 정수, 음의 정수 또는 0 모두 value로 받을 수 있는데, 음의 정수의 경우 String의 마지막 index 문자에서부터 세어나간다. 
(ex. String.at(-1)인 경우 String의 마지막 문자를 반환함.)

`let sentence = 'abcde'`

`console.log(sentence.at(0)); // expected output = 'a'`

`console.log(sentence.at(-1)); // expected output = 'e'`

---

### [String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt, "browse mdn references")

String.at()과 쓰임새는 같으나, 0부터 String.length - 1 사이의 값만 value로 받을 수 있고, default value는 0이다.

`console.log(sentence.chatAt(2)); // expected output = 'c'`

`console.log(sentence.chatAt()); // expected output = 'a'`

---

### [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt, "browse mdn references")

String의 특정 번째 문자의 0과 65535 사이 코드 값을 반환한다. index parameter가 주어지지 않을 경우 default value는 0이고, index가 범위를 벗어날 때에는 NaN을 반환한다.

`console.log(sentence.charCodeAt(2)); // expected output = 99`

---

### [String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat, "browse mdn references")

복수의 String을 연쇄시켜 하나의 새로운 String을 반환한다. 이때 하나 또는 복수의 String을 parameter로 갖는다.

`let sentenceConcat = 'Hello'`

`console.log(sentence.concat(' ', sentenceConcat)); // expected outpout = 'abcde Hello'`

---

### [String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith, "browse mdn references")

한 String이 특정 String의 문자(들)로 끝을 맺는지 아닌지 판별하여 boolean value(true or false)를 반환한다. 
number parameter를 추가하여 문자 값을 확인하고자 하는 지점을 String의 길이로 지정할 수 있다. 
(ex. string.endsWith('...', 3)인 경우 문자열 string을 앞에서부터 3 만큼의 길이로 잘랐을 때의 마지막 문자가 '...'인지를 판별)

`console.log(sentence.endsWith('de', 5)); // expected output = true`

`console.log(sentence.endsWith('de', 2)); // expected output = false`

`console.log(sentence.endsWith('b', 2)); // expected output = true`

---

