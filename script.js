function showPage(page) {
  const content = document.getElementById("content");

  if (page === "subjects") {
    content.innerHTML = `
      <h2>Subjects</h2>
      <input type="text" id="subjectInput" placeholder="Add subject" />
      <button onclick="addSubject()">Add</button>
      <ul id="subjectList"></ul>
    `;
  } else if (page === "notes") {
    content.innerHTML = `
      <h2>Notes</h2>
      <textarea id="notesInput" rows="5" placeholder="Write your notes here..."></textarea>
    `;
  } else if (page === "grades") {
    content.innerHTML = `
      <h2>Grades</h2>
      <input type="text" id="gradeSubject" placeholder="Subject" />
      <input type="number" id="gradeScore" placeholder="Score" />
      <button onclick="addGrade()">Add</button>
      <ul id="gradeList"></ul>
    `;
  } else if (page === "schedule") {
    content.innerHTML = `
      <h2>Schedule</h2>
      <input type="text" id="scheduleInput" placeholder="e.g. Math - Monday 9AM" />
      <button onclick="addSchedule()">Add</button>
      <ul id="scheduleList"></ul>
    `;
  }
}

function addSubject() {
  const subject = document.getElementById("subjectInput").value;
  const list = document.getElementById("subjectList");
  if (subject) {
    const li = document.createElement("li");
    li.textContent = subject;
    list.appendChild(li);
    document.getElementById("subjectInput").value = "";
  }
}

function addGrade() {
  const subject = document.getElementById("gradeSubject").value;
  const score = document.getElementById("gradeScore").value;
  const list = document.getElementById("gradeList");
  if (subject && score) {
    const li = document.createElement("li");
    li.textContent = `${subject}: ${score}`;
    list.appendChild(li);
    document.getElementById("gradeSubject").value = "";
    document.getElementById("gradeScore").value = "";
  }
}

function addSchedule() {
  const item = document.getElementById("scheduleInput").value;
  const list = document.getElementById("scheduleList");
  if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
    document.getElementById("scheduleInput").value = "";
  }
}
