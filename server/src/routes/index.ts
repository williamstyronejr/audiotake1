import { Application } from "express";

export default function setupRoutes(app: Application) {
  app.use("/*", (req, res) => {
    res.send("ok");
  });
}
