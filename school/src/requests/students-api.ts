import { type Student } from "../types/student.type";

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
