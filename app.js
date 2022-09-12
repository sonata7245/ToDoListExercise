/* get user input to decide what to do */
let userAction = prompt("What would you like to do?");
    userAction = userAction.toLowerCase();
const toDoList = [];

/* while until quit run program */

while (userAction !== "quit"){
    /* add new todo */
    if (userAction === "new"){
        let newToDo = prompt("Please enter the new ToDo");
        let addedItem = toDoList.push(newToDo);
      console.log(addedItem);
    }

    /* list todos */
    else if (userAction === "list"){
        console.log("*****************************");
        for (let i = 0; i < toDoList.length; i++){
            console.log(`${i+1} : ${toDoList[i]}`);
        }
        console.log("*****************************");

    }
    /* delete todo */
    else if (userAction === "delete"){
       let deleteIndex = parseInt(prompt("Please enter the index of the item you want to delete"));
       deleteIndex -= 1;

       while (!deleteIndex || deleteIndex >= toDoList.length -1) {
        deleteIndex = parseInt(prompt(`Please enter a valid number. Between 1 & ${toDoList.length}`));
       }

       let deletedItem = toDoList.splice(deleteIndex, 1);
       console.log(deletedItem);
       

    }
    /*quit program*/
    else if (userAction === "quit") {
        console.log("Quitting");
        break;
    }

    else {
        alert("Please enter a valid action item. You can enter new, list, delete or quit");    
    }

    userAction = prompt("What would you like to do?");
    userAction = userAction.toLowerCase();

}

console.log("Thank you for using the ToDo List");