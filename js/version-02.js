/*************************************
 *************VERSION-02 **************
 ***************FUNCTIONS*****************
 **************************************/
/*{
  const pageTitle = "Functions";
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.getElementById("content").appendChild(header);
  //document.body.
  console.groupCollapsed("%c" + pageTitle, "font-weight:bold");
}*/

function V2_FUNCTIONS() {
  console.log(" *****VERSION-02-Functions*****");
}
V2_FUNCTIONS.display = true;
V2_FUNCTIONS();

function sayHiTo(person) {
  console.log("hi", person);
}
sayHiTo.display = true;
sayHiTo("ilhan"); // person = 'ilhan'

//Display todos
function displayTodos(value) {
  console.log(value, ":", todos);
}
displayTodos.display = true;
displayTodos("My Todos");

//Add new todo
function addTodo(todo) {
  todos.push(todo);
  displayTodos("After addTodo");
}
addTodo.display = true;
//console.assert(b1[0] === b2[0], 'b1[0] should strictly equal b2[0]');
addTodo("Hello there");

//Changing Todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos("After changeTodo");
}
changeTodo.display = true;
changeTodo(0, "changed");
changeTodo(0, "changed again");
displayTodos("After changeTodo");

//Deleting todo
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos("After deleteTodo");
}
deleteTodo.display = true;
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

/*{
  document.body.appendChild(document.createElement("hr"));
  console.groupEnd();
}*/

/*********************************************
 ****************Version Control***************
 ********************************************
const elParagraph = document.getElementById("version-control").children[0];
elParagraph.innerHTML =
  "You are in Version 02. Please right click, inspect and go to console, then refresh the page to see JS effects.";*/
