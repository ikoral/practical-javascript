/*************************************
 *************VERSION-09 **************
 *********ESCAPE FROM THE CONSOLE******
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

//We are using this object for buttons.
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

//This view object for unordered list(ul) to show our todo list
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (let i = 0; i < myTodoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      todoLi.textContent = myTodoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }
};

//BELOW CODE ONLY SHOW SOURCE CODE ON THE HTML PAGE.
//write code to the pre element
var sourceElv9 = document.createElement("pre");
var elCode09 = document.createElement("code");
sourceElv9.className = "language-js line-numbers";
elCode09.className = "language-js";
elCode09.innerHTML = code09;
var source_code09 = elCode09.innerHTML;
source_code09 = source_code09.substring(22, source_code09.length - 2);
elCode09.innerHTML = source_code09;
sourceElv9.appendChild(elCode09);
document.getElementById("divVersion09").appendChild(sourceElv9);

//coach rob advised. not call function.
function code09() {
  //VERSION-09
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
  
  //We are using this object for buttons.
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
  
  //This view object for unordered list(ul) to show our todo list
  var view = {
    displayTodos: function() {
      var todosUl = document.querySelector("ul");
      todosUl.innerHTML = "";
      for (let i = 0; i < myTodoList.todos.length; i++) {
        var todoLi = document.createElement("li");
        todosUl.appendChild(todoLi);
      }
    }
  };
}
