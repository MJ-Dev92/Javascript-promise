// 지바스크립트를 공부할 때 큰 그림을 보면서 전반적인 것을 이해하자  
// 동작 원리를 이해하자

# Jvascript 기본

- API(Application Programming Interface) - console API는 웹 API로 자바스크립트언어 자체에 포함된 것이 아니라 브라우저가 제공하는 웹 API
- 자바스크립트 공식사이트 = [developer.mozilla.org](http://developer.mozilla.org)
- 공부할때는 mdn에서 공부한는게 제일 좋다

#1. async vs defer

1. head 내에 sciprt가 포함되어 있을 때

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="variable.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- 브라우저가 한 줄씩 parsing한 것을 css와 병합하여 DOM요소로 변환하게 된다.
- parsing HTML -> fetching js -> executing js -> parsing HTML(page is ready)
- 단점 : 사용자가 웹사이트를 보는데 시간이 오래 걸린다 그래서 script를 head에 포함하는 것은 좋은 게 아니다.

2. body안 끝에 script를 넣었을 때

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div></div>
    <script src="variable.js"></script>
  </body>
</html>
```

- parsing HTML (page is ready)-> fetching js -> executing js
- 브라우저가 먼저 HTML을 parsing 해서 페이지가 준비된 다음에 그다음에 script를 서버에서 받아오고(fetching)  
  실행(executing) 하게 된다.
- 단점 : 웹사이트가 javacript에 의존하는 사이트 즉 반응형 웹사이트라면 사용자가 정상적인 사이트를 보기 전까지는 fetching 실행 시간이 오래 걸린다.

3. head + async

- async 속성 : boolean type이라 true를 반환한다.
- 동작원리 : js파일을 만나면 병렬로 다운로드 명령만 해놓고 parsing하다가 다운이 되면 parsing을 멈추고 fetching, 실행하게 된다. 그 이후 나머지 html parsing

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script asyn src="variable.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- parsing HTML, fetching js -> executing js -> parsing HTML(page is ready)
- parsing 하는 도중 병렬로 다운받기 때문에 다운받는 시간은 절약된다
- 단점 : html이 parsing되기 전에 fetching 되고 실행이 되면 조작하려는 html이 아직 정의되지 않아 위험하다  
  또 fetching이 완료되면 중간중간 parsing이 멈추기 때문에 사용자가 페이지를 보는 것이 여전히 느리다.

4. head + defer

- 동작원리 : parsing + 병렬로 fetching parsing 완료 후 실행

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script defer src="variable.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- parsing html + fetching js -> (page is ready)executing js
- defer이 가장 좋은 옵션이다.

5. defer과 async차이
   1. head + async
      - parsing html(fatchig a,b,c js) -> blocked(실행b.js) -> blocked(실행a.js) -> parsing html -> blocked(실행c.js) -> parsing html(page is ready)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script async src="a.js"></script>
    <script async src="b.js"></script>
    <script async src="c.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

2. head + defer
   1. parsing html + facing(a, b, c js) ->(pageis ready)실행a.js,실행b.js, 실행c.js

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script defer src="a.js"></script>
    <script defer src="b.js"></script>
    <script defer src="c.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- 자바크립트의 동기적 처리와 비동기 처리에 대해 알아보자

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a77684bf-5af0-4826-9fcf-e3de0109b9ef/Untitled.png)

- 만약 작업을 동기적으로 처리한다면 작업이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 작업이 끝나야 비로소 그 다음 예정된 작업을 할 수 있죠. 하지만 이를 비동기적으로 처리를 한다면 멈추지 않기 떄문에 동시에 여러 가지 작업을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.

```jsx
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms");
}

work();
console.log("다음 작업");
```

여기서 Date.now 는 현재 시간을 숫자 형태로 가져오는 자바스크립트 내장 함수입니다. 위 work 함수는, 1,000,000,000 번 루프를 돌고, 이 작업이 얼마나 걸렸는지 알려줍니다.

![https://i.imgur.com/jLvBqG8.png](https://i.imgur.com/jLvBqG8.png)

지금은 work() 함수가 호출되면, for 문이 돌아갈 때는 다른 작업은 처리하지 않고 온전히 for 문만 실행하고 있습니다.

만약 이 작업이 진행되는 동안 다른 작업도 하고 싶다면 함수를 비동기 형태로 전환을 해주어야하는데요, 그렇게 하기 위해서는 setTimeout 이라는 함수를 사용해주어야합니다.

```jsx
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);
}

console.log("작업 시작!");
work();
console.log("다음 작업");
```

setTimeout 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출해줍니다. 지금은 두번째 파라미터에 0을 넣었습니다. 따라서, 이 함수는 바로 실행이 됩니다. 0ms 이후에 실행한다는 의미이지만 실제로는 4ms 이후에 실행됩니다 이렇게 setTimeout 을 사용하면 우리가 정한 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에 다른 작업들을 진행 할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d4de50b-8754-413a-bf38-e6be5b828840/Untitled.png)

결과물을 보면, 작업이 시작 되고 나서, for 루프가 돌아가는 동안 다음 작업도 실행되고, for 루프가 끝나고 나서 몇 ms 걸렸는지 나타나고 있습니다.

그렇다면, 만약에 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 어떻게 해야 할까요? 이럴 땐, 콜백 함수를 파라미터로 전달해주면 됩니다. 콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미합니다.

```jsx
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
  }, 0);
}

console.log("작업 시작!");
work(() => {
  console.log("작업이 끝났어요!");
});
console.log("다음 작업");
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0629ed6b-91ba-4406-8e51-b068e90d7884/Untitled.png)

다음과 같은 작업들은 주로 비동기적으로 처리하게 됩니다.

- **Ajax Web API 요청**: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.
- **파일 읽기**: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.
- **암호화/복호화**: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.
- **작업 예약**: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.

### 정리

- 프로그래밍이 비동기로 일을 한다는건 쓰레드나 프로세스가 여럿이 돌고 있다는 말이다. 즉 멀티태스킹이 구현되고 있다는 말이다.
- 자바스크립트가 도는 환경에는 JS 엔진 뿐 아니라 Web API란 것이 함께 동작한다 여기에서는 타이머를 사용하는 작업을 하거나 AJAX로 http요청을 보내거나 파일에서 데이터를 읽어오는 등 시간을 소요하는 작업들을 수행한다 즉 싱글 쓰레드인 자바스크립트에서는 여러개의 작업을 할수있는 브라우저나 Node.js에서 운영하는 Web API로 보내서 비동기처리를 한다.
