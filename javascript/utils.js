function hi() {
  // alert("Hi!!!!!!!!!!")
  console.log("Hi");
}

function parameterTest(x, y) {
  let result = x + y;
  console.log(result);
}

function returnTest(x, y) {
  return x + y;
}

function exam1() {
  let name = prompt("이름을 입력하세요");
  let i = 1;
  while (i === 1) {
    if (name === null || name === "") {
      //아무것도 입력하지 않고 확인 누르는 것도 같이 체크해줘야함
      name = prompt("입력해주세요");
    } else {
      console.log(name);
      alert(name + "님 안녕하세요.");
      i = 2;
      break;
    }
  }
}

function exam2() {
  let number = prompt("숫자를 입력해주세요");

  let i = 1;
  while (i === 1) {
    if (isNaN(number)) {
      //typeof number !== "string" prompt로 입력받는것은 모두 스트링형태이다.
      alert("숫자를 입력해주세요");
      number = prompt("숫자를 입력해주세요2");
    } else if (1 > number || number > 100) {
      alert("1이상 100이하를 넣어주세요");
      number = prompt("숫자를 입력해주세요3");
    } else {
      for (let i = 1; i <= number; i++) {
        console.log(i);
      }
      alert("완료되었습니다");
      i = 0;
      break;
    }
  }
}
