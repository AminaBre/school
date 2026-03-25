import "./style.css";
import {
  deleteStudent,
  getAllStudents,
  postStudent,
} from "./requests/students-api";
import { type Student, type NewStudent } from "./types/student.type";

const studentsList = document.getElementById("students-list") as HTMLElement;
studentsList.innerHTML = "Her kommer det studenter!";

async function getStudents() {
  const students: Student[] = await getAllStudents();

  showAllStudents(students);
}

function showAllStudents(students: Student[]) {
  //Vis frem alle students fra const students
  students.forEach((student) => {
    const studentInfo = document.createElement("div");
    studentInfo.innerHTML = `
    <h2>${student.name}</h2>
    <h3>${student.age}</h3>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Slett";

    deleteBtn.addEventListener("click", () => {
      deleteStudentId(student.id);
    });

    studentInfo.classList.add("studentinfo-container");
    studentInfo.append(deleteBtn);
    studentsList.append(studentInfo);
  });
}

async function deleteStudentId(id: number) {
  alert("Du har slettet en student!" + id);
  await deleteStudent(id);
}

const addStudentBtn = document.getElementById(
  "add-student-btn",
) as HTMLButtonElement;
const addStudentTxt = document.getElementById(
  "add-student-txt",
) as HTMLInputElement;

addStudentBtn.addEventListener("click", addStudent);

function addStudent() {
  const addStudentTxtValue = addStudentTxt.value;

  if (addStudentTxtValue) {
    alert("Hei og velkommen " + addStudentTxtValue);
  } else {
    alert("Du må skrive noe i tekstfeltet...");
  }

  const newStudent: NewStudent = {
    age: 0,
    name: addStudentTxtValue,
    address: "",
    description: "",
  };

  postStudent(newStudent);
}

getStudents();
