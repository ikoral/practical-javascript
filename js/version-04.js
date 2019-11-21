function V4_BOOLEANS() {
  console.log(" *****VERSION-04-Booleans*****");
}

V4_BOOLEANS.display = true;
V4_BOOLEANS();

function objTodoListV4() {
  var todoList = {
    todos: [],
    displayTodos: function() {
      console.log("My Todos:", this.todos);
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
objTodoListV4.display = true;
console.log(objTodoListV4());

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
