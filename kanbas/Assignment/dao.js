import Database from "../Database/index.js";
import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
  // const { assignments } = Database;
  // return assignments.filter((assignment) => assignment.course === courseId);
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  // const newAssignment = { ...assignment, _id: Date.now().toString() };
  // Database.assignments = [...Database.assignments, newAssignment];
  // return newAssignment;
  delete assignment._id;
  return model.create(assignment);
}

export function retrieveAssignment(assignmentTitle) {
  const { assignments } = Database;
  return assignments.filter(
    (assignment) => assignment.title === assignmentTitle
  );
}
export function updateAssignment(assignmentId, updatedAssignment) {
  // const { assignments } = Database;
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );
  // Object.assign(assignment, updatedAssignment);
  // return assignment;
  return model.updateOne({ _id: assignmentId }, updatedAssignment);
}

export function deleteAssignment(assignmentId) {
  // const { assignments } = Database;
  // Database.assignments = assignments.filter(
  //   (assignment) => assignment._id !== assignmentId
  // );
  return model.deleteOne({ _id: assignmentId });
}
