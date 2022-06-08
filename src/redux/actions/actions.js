// CLEAR ALL
export function clearAll() {
    localStorage.clear();
    return{
        type: "CLEAR",
        payload: []
    }
  }

// ADD A TASK
export function add(state, obj){

    const newList = [...state, obj];
    console.log(state);
    console.log(newList);
    return {
        type: "ADD",
        payload: newList
    }
}

// DELETE A TASK
export function deleteTask(tasks, e) {
    let taskId = e.target.parentElement.parentElement.parentElement.dataset.id;
    const newArr = [];

    tasks.map((task) => {
        task.id !== taskId && newArr.push(task)
    });
    
    return{
        type: 'DELETE',
        payload: newArr
    }
}

// CHANGE STATUS OF A TASK
export function statusToogle(tasks, e) {
    let taskElement = e.target.parentElement.parentElement.parentElement;
    let taskId = taskElement.dataset.id;

    tasks.forEach((task) => {
      if (taskId === task.id) {
        if (!taskElement.classList.contains("task--done")) {
          taskElement.classList.add("task--done");
          task.status = "done";
          console.log(task);
          localStorage.setItem("List", JSON.stringify(tasks));
        } else {
          taskElement.classList.remove("task--done");
          task.status = "pending";
          console.log(task);
          localStorage.setItem("List", JSON.stringify(tasks));
        }
      }
    });

    return{
        type: 'CHECK',
        payload: tasks
    }
    
}

// FILTER DONE //! Incomplete

// export function returnDone(tasks) {
//     const newArr = [];

//     tasks.map(task => {
//         task.status === 'done' && newArr.push(task);
//     })

//     return{
//         type: 'DONE',
//         payload: newArr
//     }   
// }

// export function returnAll() {
//     const newArr = localStorage.getItem('List') || [];
//     return{
//         type: 'ALL',
//         payload: newArr
//     }

// }