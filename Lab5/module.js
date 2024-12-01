const module = {
  id: 123,
  name: "module1",
  description: "this is module1",
  course: "RS001",
  score: 100,
  completed: false,
};

export default function workingWithModules(app) {
  app.get("/lab5/module/:name/:score/:completed", (req, res) => {
    const { name } = req.params;
    module.name = name;
    const { score } = req.params;
    module.score = score;
    const { completed } = req.params;
    module.completed = completed;
    res.json(module);
  });
  app.get("/lab5/module/:name", (req, res) => {
    const { name } = req.params;
    module.name = name;
    res.json(module.name);
  });
  app.get("/lab5/module/:score", (req, res) => {
    const { score } = req.params;
    module.score = score;
    res.json(module.score);
  });
  app.get("/lab5/module/:completed", (req, res) => {
    const { completed } = req.params;
    module.completed = completed;
    res.json(module.completed);
  });
}
