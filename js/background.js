const image = [
  "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"
]

const chosenImg = image[(Math.floor(Math.random() * image.length))]; // 이미지 무작위 추출

const newImg = document.createElement("img"); // img 태그 생성
newImg.src = `img/${chosenImg}`; // img src 설정
document.body.appendChild(newImg); // img 태그를 body 태그 내부로 삽입
//appendChild 대신 prepend를 사용해도 작동 가능.
//append는 가장 뒤에, prepend는 가장 위에 오게 하는 메소드