// events.js
let tasks = [];

function taskTemplate(task) {
   return `<li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
    </div>
 </li>`;
}

function renderTasks(tasks) {
  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const listEle = document.querySelector('#todoList');
  const html = tasks.map(taskTemplate);
  console.log(html);
  listEle.innerHTML = html.join("");
}

function newTask() {
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list
  const todoEle = document.querySelector("#todo");
  const aTask = {detail: todoEle.value, complete: false};
  tasks.push(aTask);
  console.log(tasks);
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  console.log(taskElement);
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  console.log(taskElement);
  // changed index to 1 because it kept returning the index at -1, not sure why. I think it works now, I may have just broke it instead.
  // there's a very specific case where it breakes when having an amount of completed items and some incomplete and hacing deleted some completed items, I have no idea why it starts returning -1 for index then
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  console.log("task index: ",taskIndex);
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  elm = event.target.dataset.function;
  console.log(elm);
  g = event.target.closest("li");
  console.log(event.target);
  console.log(event.currentTarget);
  //console.log(event.target.dataset);
  if (event.target.dataset.function === "complete") {
    completeTask(g);

  }
  if (event.target.dataset.function === "delete") {
    removeTask(g);
  }  
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.

document.querySelector("#submitTask").addEventListener('click', newTask);
// had to check the solution to see how to call manage tasks, didn't realize that events could be stored as parameters like that
document.querySelector("#todoList").addEventListener('click', manageTasks);