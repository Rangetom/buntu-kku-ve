// Data tugas disimpan di array
let tasks = [];

function addTask() {
  const name = document.getElementById("taskName").value.trim();
  const date = document.getElementById("taskDate").value;
  const priority = document.getElementById("taskPriority").value;

  if (name === "") {
    alert("Nama tugas tidak boleh kosong!");
    return;
  }

  const newTask = {
    name,
    date,
    priority,
    done: false
  };

  tasks.push(newTask);
  document.getElementById("taskName").value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<p style='text-align:center; color:gray;'>Belum ada tugas</p>";
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task" + (task.done ? " done" : "");

    li.innerHTML = `
      <div class="task-info">
        <strong>${task.name}</strong>
        <small>Prioritas: ${task.priority} | Tanggal: ${task.date || "-"}</small>
      </div>
      <div class="buttons">
        <button class="done-btn" onclick="toggleDone(${index})">✔</button>
        <button class="edit" onclick="editTask(${index})">✎</button>
        <button onclick="deleteTask(${index})">🗑</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  if (confirm("Yakin ingin menghapus tugas ini?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function editTask(index) {
  const newName = prompt("Ubah nama tugas:", tasks[index].name);
  if (newName && newName.trim() !== "") {
    tasks[index].name = newName.trim();
    renderTasks();
  }
}
