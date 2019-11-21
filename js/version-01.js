/*************************************
 *************VERSION-01 **************
 ***************ARRAYS*****************
 **************************************/
{
  const pageTitle = "Arrays";
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.getElementById("content").appendChild(header);
  //document.body.
  console.groupCollapsed("%c" + pageTitle, "font-weight:bold");
}

//Store todos
var todos = ["item 1", "item 2", "item 3"];

function arrayExample() {
  console.log(" *****VERSION-01-Arrays*****");

  //Display todos
  console.log("My Todos:", todos);

  //Add new todos
  todos.push("item 4");
  todos.push("item 5");
  console.log("My Todos after 2 times Push:", todos);

  //Change item in existing todos
  todos[0] = "item 1 updated";
  console.log("My Todos after first item updated:", todos);

  //Delete item in existing todos
  todos.splice(0, 1); //from first item(index) one item delete.
  console.log("My Todos; first item deleted:", todos);
  todos.splice(3, 1); //from third item(index) one item delete.
  console.log("My Todos; last item deleted:", todos);

  /********Additional Examples for Array*****************/

  //Add item as first item to todos.
  var unshiftedItem = todos.unshift("item 1");
  console.log("My Todos; first item unshifted again:", todos);
  console.log("unShifted item:", todos[0]);

  //Remove first item from todos.
  var shiftedItem = todos.shift();
  console.log("My Todos; first item deleted with shift:", todos);
  console.log("Shifted item:", shiftedItem);
}
arrayExample();
arrayExample.display = true;
evaluate(arrayExample);

/*********************************************
 ****************Version Control***************
 *********************************************/
/*const elParagraph = document.getElementById("version-control").children[0];
elParagraph.innerHTML =
  "You are in Version 01. Please right click, inspect and go to console, then refresh the page to see JS effects.";*/
