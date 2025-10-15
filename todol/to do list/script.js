function addTask() {
  const taskNameInput = document.getElementById("taskName");
  const taskDateInput = document.getElementById("taskDate");
  const taskPrioritySelect = document.getElementById("taskPriority");
  const taskList = document.getElementById("taskList");

  const name = taskNameInput.value.trim();
  const date = taskDateInput.value;
  const status = taskPrioritySelect.value;

  if (!name) {
    alert("⚠️ Harap isi nama tugas terlebih dahulu!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <strong>${name}</strong>
    <span class="status">${status}</span>
    ${date ? `<small>${date}</small>` : ""}
    <button class="delete">Hapus</button>
    <button class="edit">Edit</button>
  `;

  li.querySelector(".delete").addEventListener("click", () => {
    if (confirm("Yakin ingin menghapus tugas ini?")) {
      li.remove();
    }
  });

  li.querySelector(".edit").addEventListener("click", () => {
    taskNameInput.value = name;
    taskDateInput.value = date;
    taskPrioritySelect.value = status;
    li.remove();
  });

  taskList.appendChild(li);

  taskNameInput.value = "";
  taskDateInput.value = "";
  taskPrioritySelect.value = "belum selesai";
}
