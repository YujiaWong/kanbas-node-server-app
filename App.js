//创建一个简单的Web服务器
import ModuleRoutes from "./kanbas/Modules/routes.js";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameter.js";
import cors from "cors"; //导入cors
import UserRoutes from "./kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./kanbas/Courses/routes.js";
import AssignmentRoutes from "./kanbas/Assignment/routes.js";
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
); //添加cors，无参数表示所有均可接受
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

app.use(session(sessionOptions));
//sessionOption必须在cors()后
app.use(express.json());
HelloRoutes(app);
Lab5(app);
PathParameters(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
