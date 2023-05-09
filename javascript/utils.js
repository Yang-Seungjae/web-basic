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
    if (name === null) {
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

  if (typeof number !== typeof 1) {
    alert("숫자를 입력해주세요");
    let number = prompt("숫자를 입력해주세요");
  } else if (1 >= number || number >= 100) {
    alert("1이상 100이하를 넣어주세요");
    let number = prompt("숫자를 입력해주세요");
  } else {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
    alert("완료되었습니다");
  }
}
