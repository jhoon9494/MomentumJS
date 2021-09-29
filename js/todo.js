const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDoArray = []; //투두리스트 저장을 위한 빈 배열 생성

function saveToDos(){ //투두리스트 저장
  localStorage.setItem("savedList",JSON.stringify(toDoArray));
  //JSON.stringify()는 js object 나 array 또는 어떤 js 코드건 간에 string으로 변환시켜줌
}

function deleteToDo(event){ //투두리스트 삭제
  //매개변수를 넣을 경우,이벤트 발생 시 해당 이벤트에 대한 자세한 내용을 알 수 있음. 
  const li = event.target.parentElement; //click 이벤트의 target과 부모요소를 파악
  li.remove();
}

function paintToDo(newTodo){ //투두리스트 추가
  //ul 태그 내부로 li, span, button 태그 및 내용 삽입
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault(); // submit 실행 시, 기본동작인 새로고침을 막음.
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //input 초기화
  toDoArray.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);