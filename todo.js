var currentTasks = document.getElementById('current-task');
var inputTasks = document.getElementById('input-tasks');
var completedTask = document.getElementById('completed-task');

function current () {
    if (inputTasks.value == "") {
        alert("Please enter your task");
    } else {
        var container = document.createElement('div');
        container.classList.add('container-list');

        var checklist = document.createElement('div');
        checklist.classList.add('checklist-bar');
        checklist.style.width = '20px';
        checklist.style.height = '20px';
        checklist.style.borderRadius = '50%'; 
        checklist.style.border = '1px solid black';
        checklist.style.marginRight = '10px';
        checklist.onclick = checkedTask;

        var newTask = document.createElement('h3');
        newTask.innerHTML = inputTasks.value;
        newTask.style.fontWeight = 'normal';
        newTask.style.width = '350px';
        newTask.style.textAlign = 'center';

        var deleteList = document.createElement('button');
        deleteList.classList.add ('delete-bar');
        deleteList.innerHTML = 'Remove';
        deleteList.style.padding = '10px';
        deleteList.style.borderRadius = '10px';
        deleteList.style.border = '1px solid black';
        deleteList.style.backgroundColor = 'darkgray';
        deleteList.style.color = 'black';
        deleteList.onclick = removed;
        
        container.append(checklist);
        container.append(newTask);
        container.append(deleteList);

        currentTasks.append(container);
        inputTasks.value = '';
    }    
}

function checkedTask () {
    var nodeList = this.parentNode;
    if (nodeList.classList.contains('completed')) {
        nodeList.classList.remove('completed');
        nodeList.querySelector('div').style.backgroundColor = 'white';
        currentTasks.append(nodeList);
        nodeList.querySelector('button').onclick = removed;
    } else {
        completedTask.append(nodeList);
        
        nodeList.style.backgroundColor = 'white';
        nodeList.style.color = 'black';
        nodeList.querySelector('div').style.backgroundColor = 'green';
        nodeList.querySelector('div').onclick = checkedTask;
        nodeList.querySelector('button').onclick = removedCompleted;
        
        nodeList.classList.add('completed');
    }
}

function removed () {
    console.log(this.parentNode);
    currentTasks.removeChild(this.parentNode);
}

function removedCompleted () {
    console.log(this.parentNode);
    completedTask.removeChild(this.parentNode);
}