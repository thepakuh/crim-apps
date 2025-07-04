 // Save and load notes using localStorage
const notesBox = document.querySelector("textarea");

// Load saved note when page opens
window.addEventListener("load", () => {
  notesBox.value = localStorage.getItem("myNotes") || "";
});

// Save the note every time you type
notesBox.addEventListener("input", () => {
  localStorage.setItem("myNotes", notesBox.value);
});
