/*************************************
 *************VERSION-02 **************
 ***************FUNCTIONS*****************
 **************************************/
{
  const pageTitle = "Functions";
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.getElementById("content").appendChild(header);
  //document.body.
  console.groupCollapsed("%c" + pageTitle, "font-weight:bold");
}

console.log(" *****VERSION-02-Functions*****");

function sayHiTo(person) {
  console.log("hi", person);
}

sayHiTo("ilhan"); // person = 'ilhan'
sayHiTo.display = true;
evaluate(sayHiTo);

//Display todos
function displayTodos(value) {
  console.log(value, ":", todos);
}

displayTodos("My Todos");

//Add new todo
function addTodo(todo) {
  todos.push(todo);
}

addTodo("Hello there");
displayTodos("After addTodo");

//Changing Todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos("After changeTodo");
}
changeTodo(0, "changed");
changeTodo(0, "changed again");

//Deleting todo
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos("After deleteTodo");
}
deleteTodo(0);

/*********************************************
 *****Interlude - functions and variables*****
 *********************************************/
var myName = "ilhan";

function sayName() {
  var secret = "codeForYou";
  console.log(myName);
}

//console.log(secret); //Reference Error.
sayName();

/*********************************************
 ****************Version Control***************
 ********************************************
const elParagraph = document.getElementById("version-control").children[0];
elParagraph.innerHTML =
  "You are in Version 02. Please right click, inspect and go to console, then refresh the page to see JS effects.";*/
