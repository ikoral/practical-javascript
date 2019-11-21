/*************************************
 *************VERSION-03 **************
 **************OBJECTS*****************
 **************************************/
function V3_OBJECTS() {
  console.log(" *****VERSION-03-Objects*****");
}
V3_OBJECTS.display = true;
V3_OBJECTS();

// var ilhan = {
//   name: "ilhan",
//   SayName: function() {
//     console.log(this.name);
//   }
// };
function objTodoListV3() {
  var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function() {
      console.log("My Todos:", this.todos);
    },
    addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    }
  };
  return todoList;
}

objTodoListV3.display = true;
console.log(objTodoListV3());
