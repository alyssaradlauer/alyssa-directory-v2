import express from "express";
import employees from "./db/employees.js";
import router from "./api/router.js";

const app = express();
export default app;

app.use(express.json());

app.use("/employees", router);

app.get("/", (req, res) => {
  res.send("Hello employees!");
});
