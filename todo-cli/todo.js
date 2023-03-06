const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let over = [];
    let n = all.length
    for( let i =0; i<n ; i++){
        let d = all[i].dueDate;
        if (d == yesterday){
            over.push(all[i]);
        }
    }
    return over;
    // Write the date check condition here and return the array
    // of overdue items accordingly.
  }

  const dueToday = () => {
    let due = [];
    let n = all.length
    for( let i =0; i<n ; i++){
        let d = all[i];
        if (d.dueDate == today){
            delete d.dueDate;
            due.push(d);
        }

    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  }
  return due;
}

  const dueLater = () => {
    let late = [];
    let n = all.length
    for( let i =0; i<n ; i++){
        let d = all[i];
        if (d.dueDate == tomorrow){
            late.push(d);
        }

    
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  }
  return late;
}

  const toDisplayableList = (list) => {
    n = list.length;
    for(i=0;i<n;i++){
        if(list[i].completed == true){
        console.log('[x] ' + list[i].title + ' ' + list[i].dueDate);
        }
        else{
            console.log('[] ' + list[i].title + ' ' + list[i].dueDate);
        }
    }
    return 
    
    // Format the To-Do list here, and return the output string
    // as per the format given above.
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
