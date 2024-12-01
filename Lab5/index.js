import workingWithModules from "./module.js";
import PathParameters from "./PathParameter.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjectAssignment from "./WorkingWithObjectAssignment.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("welcome to lab5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  workingWithModules(app);
  WorkingWithArrays(app);
  WorkingWithObjectAssignment(app);
}
