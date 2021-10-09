const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const SAVEDTODOS_KEY = "savedToDos";

let toDoArray = []; //투두리스트 저장을 위한 빈 배열 생성
//새로고침할 때 localStorage에 저장된 데이터를 업데이트 하기 위해 const가 아닌 let으로 변수 선언.

function saveToDos(){ //투두리스트 저장
  localStorage.setItem(SAVEDTODOS_KEY,JSON.stringify(toDoArray));
  //JSON.stringify()는 js object 나 array 또는 어떤 js 코드건 간에 string으로 변환시켜줌
}

function deleteToDo(event){ //투두리스트 삭제
  //매개변수(event)를 넣을 경우, 이벤트 발생 시 해당 이벤트에 대한 자세한 내용을 알 수 있음.
  const li = event.target.parentElement; //click 이벤트의 target과 부모요소를 파악
  li.remove();
  toDoArray = toDoArray.filter(toDo => toDo.id !== parseInt(li.id));
  //filter 함수를 이용하여 toDo.id와 li.id의 값이 같을 경우(return false) 투두리스트 배열에서 제외 
  saveToDos();
}

function paintToDo(newTodo){ //투두리스트 추가
  //ul 태그 내부로 li, span, button 태그 및 내용 삽입
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault(); //submit 실행 시, 기본동작인 새로고침을 막음.
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //input 초기화

  const newTodoObj = { //localStorage에서 todolist를 삭제하기 위해 object 및 id 생성
    text : newToDo,
    id : Date.now(), //중복되지 않고 랜덤한 id 생성을 위해 Date.now() 사용
  };
  toDoArray.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(SAVEDTODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); //JSON.parse()를 이용하면 string을 array로 변환할 수 있음. 
  toDoArray = parsedToDos; //localStorage에 저장된 배열을 toDoArray의 값으로 집어 넣어서 이전 데이터를 업데이트.
  parsedToDos.forEach(paintToDo); //forEach를 이용하면 배열의 각 값마다 하나의 함수를 실행할 수 있음.
}