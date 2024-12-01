let Assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "create a node.JS",
  due: "2021-11-11",
  completed: false,
  score: 0,
};
export default function WorkingWithObjectAssignment(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(Assignment);
  });
}
