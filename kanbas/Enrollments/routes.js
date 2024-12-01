import * as enrollmentDao from "./dao.js";

export default function enrollmentRoutes(app) {
  app.get("api/enrollments", (req, res) => {
    const courses = enrollmentDao.getAllCourses();
    res.send(courses);
  });
  app.delete("api/enrollments/:courseId", (req, res) => {
    const { courseId } = req.params();
    enrollmentDao.unenrollment(courseId);
    res.sendStatus(204);
  });
}
