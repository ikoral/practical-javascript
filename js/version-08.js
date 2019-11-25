/*************************************
 *************VERSION-08 **************
 *********GETTING DATA FROM INPUT******
 **************************************/

/************Here is to run program. I use myTodoList for page.********************/

/*We created todo list object, all todo will be stored one of the property (array) of object
 and all methods for CRUD regarding todos again property of this object*/

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

//BELOW CODE FROM VERSION 07 BUT WE REFACTOR IT IN HERE VERSION 08
//IN HTML ALSO CHECK BUTTONS

//We want to get access to display todos button.
/*var addSomeTodos = document.getElementById("addSomeTodos");
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
  });*/

var handlers = {
  displayTodos: function() {
    myTodoList.displayTodos();
  },
  toggleAll: function() {
    myTodoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    myTodoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    myTodoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    myTodoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    myTodoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput = "";
  }
};

//BELOW CODE ONLY SHOW SOURCE CODE ON THE HTML PAGE.
//write code to the pre element
var sourceElv8 = document.createElement("pre");
var elCode = document.createElement("code");
sourceElv8.className = "language-js line-numbers";
code.className = "language-js";
elCode.innerHTML = code;
var source_code = elCode.innerHTML;
source_code = source_code.substring(23, source_code.length - 2);
elCode.innerHTML = source_code;
sourceElv8.appendChild(elCode);
document.getElementById("sourceCode").appendChild(sourceElv8);

//coach rob advised. not call function.
function code() {
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

  var handlers = {
    displayTodos: function() {
      myTodoList.displayTodos();
    },
    toggleAll: function() {
      myTodoList.toggleAll();
    },
    addTodo: function() {
      var addTodoTextInput = document.getElementById("addTodoTextInput");
      myTodoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById(
        "changeTodoPositionInput"
      );
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");
      myTodoList.changeTodo(
        changeTodoPositionInput.valueAsNumber,
        changeTodoTextInput.value
      );
      changeTodoTextInput.value = "";
      changeTodoPositionInput.value = "";
    },
    deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById(
        "deleteTodoPositionInput"
      );
      myTodoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById(
        "toggleCompletedPositionInput"
      );
      myTodoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput = "";
    }
  };
}
