import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function retrieveAssignment(assignmentTitle) {
  const { assignments } = Database;
  return assignments.filter(
    (assignment) => assignment.title === assignmentTitle
  );
}
export function updateAssignment(assignmentId, updatedAssignment) {
  const { assignments } = Database;
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  Object.assign(assignment, updatedAssignment);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
}
