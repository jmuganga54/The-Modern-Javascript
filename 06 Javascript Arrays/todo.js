let todos = [
    {
        text:'Reading Book',
        completed:false
    },{
        text:'Learning Javascript',
        completed: true
    },{
        text:'Entering Data',
        completed: false
    },{
        text:'ICF Translation',
        completed:true

    },{
        text:'Learning Python and Django',
        completed:false
    },{
        text:'Learning React Framework',
        completed:true
    }
]

// const deleteTodo = function (todos, todoToDelete){
//     let indexTodo = todos.findIndex(function(todo){
//         return todo.text.toLowerCase() === todoToDelete.toLowerCase();
//     });
//     if(indexTodo > -1){
//         todos.splice(indexTodo,1)
//     }else{
//         console.log('Todo not found, nothing removed')
//     }
 
// }
const sortTodos = function (todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0;
        }
    })
}

//Challenge area
//List of todo's with a completed values of false

// const getThingToDo = function(todos){
//     return todos.filter(function(todo){
//         return !todo.completed;
//     })

// }

sortTodos(todos)
console.log(todos)
// console.log(getThingToDo(todos,))

// deleteTodo(todos,'Book')
// console.log(todos)// deleteTodo(todos,'Book')
// console.log(todos)

