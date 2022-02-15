## data type: String의 methods

### [String.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at, "browse mdn references")

주어진 String의 특정 정수 번째 문자를 반환한다. 양의 정수, 음의 정수 또는 0 모두 parameter로 받을 수 있는데, 음의 정수의 경우 String의 마지막 index 문자에서부터 세어나간다. 
(ex. String.at(-1)인 경우 String의 마지막 문자를 반환함.)

`let sentence = 'abcde'`

`console.log(sentence.at(0)); // expected output = 'a'`

`console.log(sentence.at(-1)); // expected output = 'e'`

---

### [String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt, "browse mdn references")

String.at()과 쓰임새는 같으나, 0부터 String.length - 1 사이의 값만 parameter로 받을 수 있고, default는 0이다.

`console.log(sentence.charAt(2)); // expected output = 'c'`

`console.log(sentence.charAt()); // expected output = 'a'`

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

### [String.prototype.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith, "browse mdn references")

한 String이 특정 String의 문자(들)로 시작하는지 아닌지 판별하여 boolean value(true or false)를 반환한다. 
두 번째 parameter로 index 값을 주어 starting substring의 값을 확인할 부분의 시작지점을 지정할 수 있다. 
(ex. string.startsWith('...', 3)인 경우 String이 3번째 자리에서 '...'이라는 substring으로 시작하는지 true or false로 판별) 
Default 값은 0이다.

#### Examples

`console.log(sentence.startsWith('b',1)); // expected output = true`

`console.log(sentence.startsWith('a')); // expected output = true`

---

### [String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith, "browse mdn references")

한 String이 특정 String의 문자(들)로 끝을 맺는지 아닌지 판별하여 boolean value(true or false)를 반환한다. 
두 번째 parameter로 string.length를 주어 String을 해당 길이로 잘랐을 때의 마지막 부분을 확인할 수 있도록 지정할 수 있다.

#### Examples

`console.log(sentence.endsWith('de', 5)); // expected output = true`

`console.log(sentence.endsWith('de', 2)); // expected output = false`

`console.log(sentence.endsWith('b', 2)); // expected output = true`

---

### [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode, "browse mdn references")

0과 65535 사이 UTF-16 코드 유닛들의 sequence를 parameters로 받아 하나의 String을 반환한다.

`let sentenceFromCharCode = String.fromCharCode(65,66,67,68,69)`

`console.log(sentenceFromCharCode); // expected output = 'ABCDE'`

---

### [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes, "browse mdn references")

대소문자 여부를 포함하여 어떤 한 String이 다른 한 String에 포함되어 있는지 여부를 판별한다.

`let sentence2 = "I never hated you"`

`let strInc1 = "never"`

`let strInc2 = "i"`

`console.log(sentence2.includes(strInc1)); // expected output = true`

`console.log(senInc.includes(strInc2)); // expected output = false`

---

### [String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf, "browse mdn references")

어떤 문자(열)이 다른 한 문자열에서 처음 등장하는 그 index 값을 반환한다. position 값 parameter를 추가하여 해당 위치와 같거나 더 큰 위치를 범위로 설정할 수도 있다.

`console.log(sentence2.indexOf('e')); // expected output = 3`

`console.log(sentence2.indexOf('e', 4)); // expected output = 5 ... sentence2에서 4번 index를 포함하여 그 이후로 몇 번째 index에서 처음으로 'e' string이 등장하는지 확인`

---

### [String.prototype.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf, "browse mdn references")

어떤 문자(열)이 다른 한 문자열에서 마지막으로 등장하는 그 index 값을 반환한다. position 값 parameter를 추가하여 해당 위치와 같거나 더 작은 위치를 범위로 설정할 수도 있다.

`console.log(sentence2.lastIndexOf('e')); // expected output = 11`

`console.log(sentence2.lastIndexOf('e', 10)); // expected output = 5`

---

### [String.prototype.localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare, "browse mdn references")

#### Syntax

`String.prototype.localeCompare(compareString)`
  
`String.prototype.localeCompare(compareString, locales) // 언어 설정 가능`
  
`String.prototype.localeCompare(compareString, locales, options)`

한 string(비교문자열)이 다른 한 string(reference)에 대해 sort order 상으로 앞에 오는지, 뒤에 오는지, 혹은 동시에 오는지를 판별한다. reference가 앞에 오면 음수, 뒤에 오면 양수, 
동시에 오면 0을 각각 반환한다.

`console.log('blanket'.localeCompare('coffee')); // expected output = -1 or -2`

`console.log('coffee'.localeCompare('blanket')); // expected output = 1 or 2`

---

### [String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd, "browse mdn references")

String이 입력한 값만큼의 길이를 갖도록 기존 String의 뒤에 공백 또는 원하는 값을 덧붙인다. 두 번째 parameter가 없을 때에는 공백을 추가하고, 있을 때에는 그 값을 길이에 도달할 때까지 반복한다.

#### Syntax

`String.prototype.padEnd(원하는길이) // 공백을 반복`

`String.prototype.padEnd(원하는길이, 반복하고싶은것)`

#### Examples

`console.log(sentence.padEnd(7)); // expected output = 'abcde  '`

`console.log(sentence.padEnd(7, '.')); // expected output = 'abcde..'`

---

### [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart, "browse mdn references")

String이 입력한 값만큼의 길이를 갖도록 기존 String의 앞에 공백 또는 원하는 값을 덧붙인다. 두 번째 parameter가 없을 때에는 공백을 추가하고, 있을 때에는 그 값을 길이에 도달할 때까지 반복한다.

#### Syntax

`String.prototype.padStart(원하는길이) // 공백을 반복`

`String.prototype.padStart(원하는길이, 반복하고싶은것)`

#### Examples

`console.log(sentence.padStart(7)); // expected output = '  abcde'`

`console.log(sentence.padStart(7, '*')); // expected output = '**abcde'`

`let strStart1 = '23keh44hi5';`

`let strStart2 = strStart1.slice(-4); // '4hi5'`

`console.log(strStart2.padStart(strStart1.length, '*')); // '******4hi5'`

---

### [String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat, "browse mdn references")

String을 입력한 값 만큼 반복한다.

#### Examples

`console.log('abc'.repeat(3)); // expected output = 'abcabcabc'`

---

### [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace, "browse mdn references")

String의 일부 혹은 특정 regular expression에 match되는 부분을 다른 substring으로 대체(replace)한다. 기존 String은 변화하지 않는다.

> 자세한 부분 다시 읽어보기

#### Examples

`console.log('I fucking love cakes.'.replace('cakes', 'carrots')); // expected output = 'I fucking love carrots'`

---

### [String.prototype.replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll, "browse mdn references")

String의 일부 혹은 특정 regular expression에 match되는 부분을 **모두** 다른 substring으로 대체(replace)한다. 기존 String은 변화하지 않는다.

#### Examples

`console.log('I fucking love cakes. He sells one of the best cakes in the world.'.replace('cakes', 'desserts')); // expected output = 'I fucking love desserts. He sells one of the best cakes in the world.'`

`console.log('I fucking love cakes. He sells one of the best cakes in the world.'.replaceAll('cakes', 'desserts')); // expected output = 'I fucking love desserts. He sells one of the best desserts in the world.'`

---

### [String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search, "browse mdn references")

주어진 String에 대해 특정 regular expression 또는 다른 String과 일치하는 부분이 있으면 그 index 값을, 없으면 -1을 return한다.

#### Syntax

`String.prototype.search(regularExpression)`

#### Examples

> regular expression 공부하자

---

### [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice, "browse mdn references")

어떤 String으로부터 특정한 부분을 떼어내 return 한다. 이때 기존 String은 변화하지 않는다. 
두 번째 parameter를 추가할 수 있는데, 이는 끝낼 index가 아니라, 끝낼 index의 다음 index 번호이다. 
음수 parameter는 String의 마지막부터 세어 자른다.

#### Syntax

`String.prototype.slice(시작index)`

`String.prototype.slice(시작index, 끝낼index의다음index)`

#### Examples

`console.log('I love you.'.slice(2)); // expected output = 'love you.'`

`console.log('I love you.'.slice(2, 6)); // expected output = 'love'`

`console.log('I love you.'.slice(-4, -1)); // expected output = 'you'`

### [String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring, "browse mdn references")

한 string의 일부 substring을 return 한다. 시작 부분 index를 첫 번째 parameter로 갖고, 잘라낼 부분의 첫 번째 index를 두 번째 parameter로 추가할 수 있다.

#### Examples

`console.log('I love you.'.substring(2)); // expected output = 'love you.'`

`console.log('I love you.'.substring(2, 6)); // expected output = 'love'`

### Differences between substring() and slice()

둘은 거의 동일하다고 봐야 하지만 몇 가지 차이가 있다.

1. primary parameter > secondary parameter일 때 substring은 두 값을 서로 바꾸어 정상적으로 값을 return하지만, slice는 빈 string을 return한다.

`console.log(sentence.substring(4,1)); // expected output = 'bcd'`

`console.log(sentence.slice(4,1)); // expeted output = ''`

2. parameter가 음수일 때 substring은 parameter 값을 0으로 인식하는 한편, slice는 string의 마지막 index부터 세어 값을 return 한다.

`console.log(sentence.substring(-3,-1)); // expected output = ''`

`console.log(sentence.substring(-3,-1)); // expected output = 'cd'`

---

### [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split, "browse mdn references")

한 String을 특정 부분(a substring or a regular expression) 기준으로 나누어 array로 return 한다. 분할 기준에 대한 값(primary parameter)이 없으면 String 전체를 하나의 array로 반환한다. 음이 아닌 정수의 두 번째 parameter를 주어 returned array에 포함할 index 수를 제한할 수 있다.

#### Examples

`console.log('abceabceabceabc'.split('e')); // expected output = ['abc','abc','abc','abc']`

`console.log('abceabceabceabc'.split('e',2)); // expected output = ['abc','abc']`

`console.log('abceabceabceabc'.split()); // expected output = ['abceabceabceabc']`

---

### [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase, "browse mdn references")

주어진 String을 소문자 형태로 return 한다.

#### Examples

`console.log('A Fox'.toLowerCase()); // expected output = 'a fox'`

---

### [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase, "browse mdn references")

주어진 String을 대문자 형태로 return 한다.

#### Examples

`console.log('a fox'.toUpperCase()); // expected output = 'A FOX'`

---

### [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim, "browse mdn references")

양 끝의 whitespace를 제거하여 새로운 string을 return 한다. 이때 기존 String은 변형되지 않는다.

`console.log('  tell me  '.trim()); // expected output = 'tell me'`

### [String.prototype.trimStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart, "browse mdn references")

시작부분의 whitespace를 제거한다.

`console.log('  tell me  '.trimStart()); // expected output = 'tell me  '`

### [String.prototype.trimEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd, "browse mdn references")

끝부분의 whitespace를 제거한다.

`console.log('  tell me  '.trimEnd()); // expected output = '  tell me'`

---

valueOf, toString
