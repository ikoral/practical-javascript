/*************************************
 *************VERSION-05 **************
 **********OBJECTS-for Loops***********
 **************************************/
function V5_LOOPS_OF_LOGIC() {
  console.log(" *****VERSION-05-LoopsOfLogic*****");
}

V5_LOOPS_OF_LOGIC.display = true;
V5_LOOPS_OF_LOGIC();

function objTodoListV5() {
  var todoList = {
    todos: [],
    displayTodos: function() {
      if (this.todos.length === 0) {
        console.log("Your todo list is empty!");
      } else {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
            console.log("(x)", this.todos[i].todoText);
          } else {
            console.log("( )", this.todos[i].todoText);
          }
        }
      }
    },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },
    changeTodo: function(position, todoText) {
      //this.todos[position] = newValue;
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    }
  };
}
objTodoListV5.display = true;
console.log(objTodoListV5());

/*****evaluates********/
evaluate(V1_ARRAYS);
evaluate(V2_FUNCTIONS);
evaluate(sayHiTo);
evaluate(displayTodos);
evaluate(addTodo);
evaluate(changeTodo);
evaluate(deleteTodo);
evaluate(V3_OBJECTS);
evaluate(objTodoListV3);
evaluate(V4_BOOLEANS);
evaluate(objTodoListV4);
evaluate(V5_LOOPS_OF_LOGIC);
evaluate(objTodoListV5);
