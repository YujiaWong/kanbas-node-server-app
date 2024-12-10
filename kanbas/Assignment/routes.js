import * as AssignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    await AssignmentDao.deleteAssignment(assignmentId);
    //console.log("成功了吗");
    res.sendStatus(204);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdate = req.body;
    await AssignmentDao.updateAssignment(assignmentId, assignmentUpdate);
    res.sendStatus(204);
  });
}
