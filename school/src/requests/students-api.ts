import { type Student, type NewStudent } from "../types/student.type";

export async function getAllStudents(): Promise<Student[]> {
  try {
    const response: Response = await fetch(
      "http://localhost:3000/api/students",
    );

    if (!response.ok) {
      throw new Error("Kunne ikke hente data" + response.status);
    }

    const data: Student[] = await response.json();
    return data;
  } catch (error) {
    console.log("Oops, noe gikk galt!", error);
    throw error;
  }
}

export async function postStudent(student: NewStudent): Promise<NewStudent> {
  try {
    const response: Response = await fetch(
      "http://localhost:3000/api/students",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer Amina123",
        },
        body: JSON.stringify(student),
      },
    );

    const data: NewStudent = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteStudent(id: number): Promise<void> {
  try {
    const response: Response = await fetch(
      `http://localhost:3000/api/students/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer Amina123",
        },
      },
    );
    if (!response.ok) {
      throw new Error(
        `Feil ved sletting av student! :O ${response.status} Studentens ID: ${id}`,
      );
    }
  } catch (error) {
    throw error;
  }
}
