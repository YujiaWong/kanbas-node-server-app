export default function WorkingWithObjects(app) {
  const assignment = {
    socre: 20,
    name: "assignment1",
    ddl: "2021/02/03",
  };
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
}
