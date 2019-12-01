/*************************************
 *************VERSION-11 **************
 *********DESTROY ALL FOR LOOPS********
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

    /**now we are removinf for loops and adding for each. I also changed code
     and instead of using function statements inside forEach I used arrow function
     => **/

    toggleAll: function() {
      var totalTodos = this.todos.length;
      var CompletedTodos = 0;
  
      //Get number of completed todos.
      
    //   for (var i = 0; i < totalTodos; i++) {
    //     if (this.todos[i].completed === true) {
    //       CompletedTodos++;
    //     }for (var i = 0; i < totalTodos; i++) {
        //   this.todos[i].completed = false;
    //   }
      //debugger;
      this.todos.forEach(todo => {
        if (todo.completed === true){
          CompletedTodos ++;
        }
      });

      // this.todos.forEach(function (todo) {
      //   if (todo.completed === true){
      //     CompletedTodos ++;
      //   }
      //});

      //Case 1: If everything true, make everything false
      if (CompletedTodos === totalTodos) {
        // for (var i = 0; i < totalTodos; i++) {
        //   this.todos[i].completed = false;
        this.todos.forEach(todo => {
          todo.completed = false;
        })
  
        //Case 2: Otherwise, make everything true.
      } else {
        // for (var j = 0; j < totalTodos; j++) {
        //   this.todos[j].completed = true;
        // }
        
        this.todos.forEach(todo => {
          todo.completed = true;
        })
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
    /*deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        myTodoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
      },*/
  
    deleteTodo: function(position) {
      myTodoList.deleteTodo(position);
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
      
      /******We are changing below code with forEach in this version****
       and get ride of for loops.**/
      // for (let i = 0; i < myTodoList.todos.length; i++) {
      //   let todoLi = document.createElement("li");
      //   let todo = myTodoList.todos[i];
      //   let todoTextWithCompletion = "";
  
      //   if (todo.completed === true) {
      //     todoTextWithCompletion = "(x) " + todo.todoText;
      //   } else {
      //     todoTextWithCompletion = "( ) " + todo.todoText;
      //   }
  
      //   todoLi.id = i;
      //   todoLi.textContent = todoTextWithCompletion;
      //   todoLi.appendChild(this.createDeleteButton());
      //   todosUl.appendChild(todoLi);
      // }

      /***Here we are using again forEach but for each call callback function inside it.
       This callback function is not directly method of view object. So in this case
       when we execute teh code we get this.createDeleteButton is not a function error
       so we need to specify tis statement as a parameter for forEach statement.***/
       
       //array.forEach(function{},this) Check MDN documentation.

      myTodoList.todos.forEach( function(todo, position){
        let todoLi = document.createElement("li");
        let todoTextWithCompletion = "";
  
        if (todo.completed === true) {
          todoTextWithCompletion = "(x) " + todo.todoText;
        } else {
          todoTextWithCompletion = "( ) " + todo.todoText;
        }
  
        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      },this);
    },
  
    //To better organization deleteButton method added.
    createDeleteButton: function() {
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "deleteButton";
      return deleteButton;
    },
    setUpEventListeners: function() {
      const todosUl = document.querySelector("ul");
  
      todosUl.addEventListener("click", function(event) {
        //console.log(event.target.parentNode.id);
  
        //Get the element that was clicked on.
        let elementClicked = event.target;
  
        //Check if elementClicked is a delete button.
        if (elementClicked.className === "deleteButton") {
          //Run handlers.deleteTodo(position)
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
      });
    }
  };
  
  view.setUpEventListeners();
  
  
  
  
  
  //BELOW CODE ONLY SHOW SOURCE CODE ON THE HTML PAGE.
  //write code to the pre element
  var sourceElv11 = document.createElement("pre");
  var elCode11 = document.createElement("code");
  sourceElv11.className = "language-js line-numbers";
  elCode11.className = "language-js";
  elCode11.innerHTML = code11;
  var source_code11 = elCode11.innerHTML;
  source_code11 = source_code11.substring(22, source_code11.length - 2);
  elCode11.innerHTML = source_code11;
  sourceElv11.appendChild(elCode11);
  document.getElementById("divVersion11").appendChild(sourceElv11);
  
  function code11() {
    //VERSION-11
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
  
      /**now we are removinf for loops and adding for each. I also changed code
       and instead of using function statements inside forEach I used arrow function
       => **/
  
      toggleAll: function() {
        var totalTodos = this.todos.length;
        var CompletedTodos = 0;
    
        //Get number of completed todos.
        
      //   for (var i = 0; i < totalTodos; i++) {
      //     if (this.todos[i].completed === true) {
      //       CompletedTodos++;
      //     }for (var i = 0; i < totalTodos; i++) {
          //   this.todos[i].completed = false;
      //   }
        //debugger;
        this.todos.forEach(todo => {
          if (todo.completed === true){
            CompletedTodos ++;
          }
        });
  
        // this.todos.forEach(function (todo) {
        //   if (todo.completed === true){
        //     CompletedTodos ++;
        //   }
        //});
  
        //Case 1: If everything true, make everything false
        if (CompletedTodos === totalTodos) {
          // for (var i = 0; i < totalTodos; i++) {
          //   this.todos[i].completed = false;
          this.todos.forEach(todo => {
            todo.completed = false;
          })
    
          //Case 2: Otherwise, make everything true.
        } else {
          // for (var j = 0; j < totalTodos; j++) {
          //   this.todos[j].completed = true;
          // }
          
          this.todos.forEach(todo => {
            todo.completed = true;
          })
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
      /*deleteTodo: function() {
          var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
          myTodoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
          deleteTodoPositionInput.value = "";
          view.displayTodos();
        },*/
    
      deleteTodo: function(position) {
        myTodoList.deleteTodo(position);
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
        
        /******We are changing below code with forEach in this version****
         and get ride of for loops.**/
        // for (let i = 0; i < myTodoList.todos.length; i++) {
        //   let todoLi = document.createElement("li");
        //   let todo = myTodoList.todos[i];
        //   let todoTextWithCompletion = "";
    
        //   if (todo.completed === true) {
        //     todoTextWithCompletion = "(x) " + todo.todoText;
        //   } else {
        //     todoTextWithCompletion = "( ) " + todo.todoText;
        //   }
    
        //   todoLi.id = i;
        //   todoLi.textContent = todoTextWithCompletion;
        //   todoLi.appendChild(this.createDeleteButton());
        //   todosUl.appendChild(todoLi);
        // }
  
        /***Here we are using again forEach but for each call calback function inside it.
         This callback function isnt directly method of view object. So in this case
         when we execute teh code we get this.createDeleteButton is not a function error
         so we need to spacify tis statement as a parameter for forEach statement.***/
         
         //array.forEach(function{},this) Check MDN documentation.
  
        myTodoList.todos.forEach( function(todo, position){
          let todoLi = document.createElement("li");
          let todoTextWithCompletion = "";
    
          if (todo.completed === true) {
            todoTextWithCompletion = "(x) " + todo.todoText;
          } else {
            todoTextWithCompletion = "( ) " + todo.todoText;
          }
    
          todoLi.id = position;
          todoLi.textContent = todoTextWithCompletion;
          todoLi.appendChild(this.createDeleteButton());
          todosUl.appendChild(todoLi);
        },this);
      },
    
      //To better organization deleteButton method added.
      createDeleteButton: function() {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
      },
      setUpEventListeners: function() {
        const todosUl = document.querySelector("ul");
    
        todosUl.addEventListener("click", function(event) {
          //console.log(event.target.parentNode.id);
    
          //Get the element that was clicked on.
          let elementClicked = event.target;
    
          //Check if elementClicked is a delete button.
          if (elementClicked.className === "deleteButton") {
            //Run handlers.deleteTodo(position)
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
          }
        });
      }
    };
    
    view.setUpEventListeners();
  }
  