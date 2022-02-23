"use strict";

// https://www.daleseo.com/js-window-fetch/

// "원격 API를 간편하게 호출할 수 있도록 브라우저에서 제공하는 fetch() 함수!"

// fetch() function ...
// first param = URL
// second param = options
// returns a Promise typed object
// if succeed => resolve
// if fail = > reject

//GET
// fetch는 GET 방식으로 작동하는 것이 default이므로 이 경우 option 불필요

/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => console.log(response));
*/

// Response { ..., status: 200, ok: true, ... }

// 대부분의 REST APIs는 JSON 형태의 데이터로 응답하므로 response object는 json() method 제공.

/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => {return response.json();})
.then((data) => console.log(data));
*/

// { ..., id: 1, title: '...', body: '...' }

//POST



fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      id: 1,
      title: "Test",
      body: "I am testing!",
    }),
  }
)
.then((response) => response.json)
.then((data) => console.log(data));

/*
fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  {
    method: "DELETE",
  }
)
.then((response) => response.json)
.then((data) => console.log(data));
*/