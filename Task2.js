 // Load tasks on page load
  window.onload = function() {
    if (localStorage.getItem("tasks")) {
      document.getElementById("taskList").innerHTML = localStorage.getItem("tasks");
      attachButtonsToTasks();
    }
  };

  function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
      li.classList.toggle("completed");
      saveTasks();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
      const newText = prompt("Edit task:", li.firstChild.textContent.trim());
      if (newText) {
        li.childNodes[0].nodeValue = newText + " ";
        saveTasks();
      }
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function () {
      li.remove();
      saveTasks();
    };

    // Append buttons
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
    saveTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
  }

  // After loading from localStorage, reconnect buttons
  function attachButtonsToTasks() {
    const listItems = document.querySelectorAll("#taskList li");
    listItems.forEach((li) => {
      const buttons = li.querySelectorAll("button");
      if (buttons.length === 0) {
        const taskText = li.textContent;

        // Rebuild buttons
        li.innerHTML = taskText.replace(/Done|Edit|Remove/g, "").trim();

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Done";
        completeBtn.className = "complete-btn";
        completeBtn.onclick = function () {
          li.classList.toggle("completed");
          saveTasks();
        };

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = function () {
          const newText = prompt("Edit task:", li.firstChild.textContent.trim());
          if (newText) {
            li.childNodes[0].nodeValue = newText + " ";
            saveTasks();
          }
        };

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = function () {
          li.remove();
          saveTasks();
        };

        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
      }
    });
  }

  function showAlert()
  {
    alert("Successfully Registerd!")
  }