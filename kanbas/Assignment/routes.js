import * as AssignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    AssignmentDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdate = req.body;
    AssignmentDao.updateAssignment(assignmentId, assignmentUpdate);
    res.sendStatus(204);
  });
}
