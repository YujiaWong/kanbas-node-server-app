import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function getAllCourses() {
  const { courses } = Database;
  return courses;
}

export function unenrollment(courseId) {
  const { enrollments } = Database;
  enrollments.filter((enrollment) => enrollment._id !== courseId);
}
