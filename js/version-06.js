/*************************************
 *************VERSION-06 **************
 **********THINKING IN CODE***********
 **************************************/
function V6_THINKING_IN_CODE() {
  console.log(" *****VERSION-06-ThinkingInCode*****");
}

V6_THINKING_IN_CODE.display = true;
V6_THINKING_IN_CODE();

function objTodoListV6() {
  var todoList = {
    todos: [],
    displayTodos: function() {
      if (this.todos.length === 0) {
        console.log("Your todo list is empty!");
      } else {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++) {
          //console.log(this.todos[i].todoText);
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
    },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var CompletedTodos = 0;

      //Get number of completed todos.
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          CompletedTodos++;
        }
      }
      //Case 1: If everything true, make everything false
      if (CompletedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
        //Case 2: Otherwise, make everything true.
      } else {
        for (var j = 0; j < totalTodos; j++) {
          this.todos[j].completed = true;
        }
      }
      this.displayTodos();
    }
  };
}

objTodoListV6.display = true;
console.log(objTodoListV6());

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
evaluate(V6_THINKING_IN_CODE);
evaluate(objTodoListV6);
