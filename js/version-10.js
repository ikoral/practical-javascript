/*************************************
 *************VERSION-10 **************
 **********CLICK TO DELETE************
 **************************************/

/************Here is to run program. I use myTodoList for page.********************/

/*We created todo list object, all todo will be stored one of the property (array) of object
 and all methods for CRUD regarding todos again property of this object*/

 var myTodoList = {
    todos: [],
    
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      //this.displayTodos();
    },
    changeTodo: function(position, todoText) {
      //this.todos[position] = newValue;
      this.todos[position].todoText = todoText;
      //this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      //this.displayTodos();
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      //this.displayTodos();
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
      //this.displayTodos();
    }
  };
  
  //We are using this object for buttons.
  var handlers = {
    //we don't need any more to display on console.
    /*displayTodos: function() {
      myTodoList.displayTodos();
    },*/
    toggleAll: function() {
      myTodoList.toggleAll();
      view.displayTodos();
    },
    addTodo: function() {
      var addTodoTextInput = document.getElementById("addTodoTextInput");
      myTodoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
      view.displayTodos();
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
      view.displayTodos();
    },
    deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById(
        "deleteTodoPositionInput"
      );
      myTodoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
      view.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById(
        "toggleCompletedPositionInput"
      );
      myTodoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput = "";
      view.displayTodos();
    }
  };
  
  //This view object for unordered list(ul) to show our todo list
  var view = {
    displayTodos: function() {
      var todosUl = document.querySelector("ul");
      todosUl.innerHTML = "";

      for (let i = 0; i < myTodoList.todos.length; i++) {
        let todoLi = document.createElement("li");
        let todo = myTodoList.todos[i];
        let todoTextWithCompletion = '';
              
        if (todo.completed === true) {
          todoTextWithCompletion = '(x) ' + todo.todoText;
        } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
        }
        
        todoLi.id = i;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      }
    },

    //To better organization deleteButton method added.
    createDeleteButton: function(){
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    }
  };

  const todosUl = document.querySelector('ul');

  todosUl.addEventListener('click', function(event){
      console.log(event.target.parentNode.id);
  });
  
  //BELOW CODE ONLY SHOW SOURCE CODE ON THE HTML PAGE.
  //write code to the pre element
  var sourceElv10 = document.createElement("pre");
  var elCode10 = document.createElement("code");
  sourceElv10.className = "language-js line-numbers";
  elCode10.className = "language-js";
  elCode10.innerHTML = code10;
  var source_code10 = elCode10.innerHTML;
  source_code10 = source_code10.substring(22, source_code10.length - 2);
  elCode10.innerHTML = source_code10;
  sourceElv10.appendChild(elCode10);
  document.getElementById("divVersion10").appendChild(sourceElv10);
  
  function code10() {
    //VERSION-10
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
          let todoLi = document.createElement("li");
          let todo = myTodoList.todos[i];
          let todoTextWithCompletion = '';
                    
          if (todo.completed === true) {
            todoTextWithCompletion = '(x) ' + todo.todoText;
          } else {
            todoTextWithCompletion = '( ) ' + todo.todoText;
          }
  
          todoLi.textContent = todoTextWithCompletion;
          todosUl.appendChild(todoLi);
        }
      }
    };
  }
  