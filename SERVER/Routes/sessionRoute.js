
import express from "express";
import SessionController from "../Controllers/sessionController.js";


const sessionRouter = express.Router();

sessionRouter.post("/record",SessionController.recordSession);
sessionRouter.get("/sessions",SessionController.getAllSessions);
sessionRouter.get("/:id",SessionController.getOneSession);
sessionRouter.patch("/:id",SessionController.updateSession);
sessionRouter.delete("/:id",SessionController.deleteSession);
sessionRouter.patch("/id/statusApprove",SessionController.updateSessionApprove);
sessionRouter.patch("/id/statusDecline",SessionController.updateStatusDecline);


export default sessionRouter;