document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✅";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("task-list").appendChild(li);

  taskInput.value = "";
});
