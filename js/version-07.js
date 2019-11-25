/*************************************
 *************VERSION-07 **************
 ************HTML AND DOM***********
 **************************************/

 /************Here is to run program. I use myTodoList for page.********************/

 /*
 var myTodoList = {
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

  //We want to get access to display todos button.
  var addSomeTodos = document.getElementById("addSomeTodos");
  var displayTodosButton = document.getElementById("displayTodosButton");
  var toggleAllButton = document.getElementById("toggleAllButton");
  console.log(displayTodosButton);
  console.log(toggleAllButton);
  //We want to run displayTodos methods, when someone clicks the display
  //todos button.
  addSomeTodos.addEventListener("click", function() {
    myTodoList.addTodo('first Dummy Todo');
    myTodoList.addTodo('second Dummy Todo');
  });

  displayTodosButton.addEventListener("click", function() {
    myTodoList.displayTodos();
  });

  toggleAllButton.addEventListener("click", function() {
    myTodoList.toggleAll();
  });
*/
/************Here is to show source code on page. I use todoList object for this purpose********************/
function V7_HTML_AND_DOM() {
  console.log(" *****VERSION-07-HTML And DOM*****");
}

V7_HTML_AND_DOM.display = true;
V7_HTML_AND_DOM();

function objTodoListV7() {
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

objTodoListV7.display = true;
console.log(objTodoListV7());

function accessingDOM_V7() {
  //We want to get access to display todos button.
  var displayTodosButton = document.getElementById("displayTodosButton");
  var toggleAllButton = document.getElementById("toggleAllButton");
  console.log(displayTodosButton);
  console.log(toggleAllButton);
  //We want to run displayTodos methods, when someone clicks the display
  //todos button.

  /*****I SET IT AS COMMENT TO AVOID FRACTION ON PURPOSE********/
  /*displayTodosButton.addEventListener("click", function() {
    todoList.displayTodos();
  });*/



}

accessingDOM_V7.display = true;
console.log(accessingDOM_V7());

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
evaluate(V7_HTML_AND_DOM);
evaluate(objTodoListV7);
evaluate(accessingDOM_V7);
