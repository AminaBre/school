import "./style.css";
import { getAllStudents } from "./requests/students-api";
import { type Student } from "./types/student.type";

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

    studentInfo.classList.add("studentinfo-container");

    studentsList.append(studentInfo);
  });
}

getStudents();
