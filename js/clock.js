const clock = document.querySelector("#clock")

function getClock(){
  const date = new Date() // 현재 날짜 및 시간을 객체로 생성
  const hours = String(date.getHours()).padStart(2,"0"); 
  // String() 사용하여 문자열로 전환 후 padStart() 사용.
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);  