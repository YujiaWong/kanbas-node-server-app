export default function HelloRoutes(app) {
  app.get("/hello", (req, res) => {
    res.send("hello world,live is good");
  });
  app.get("/", (req, res) => {
    res.send("welcome ,haha1111!");
  });
}
