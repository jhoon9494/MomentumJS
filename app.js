const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form .inputText");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = "hello " + username;
  greeting.innerText = `hello ${username}`; // '' or "" 로는 작동하지 않음.
}

loginForm.addEventListener("submit", onLoginSubmit);
