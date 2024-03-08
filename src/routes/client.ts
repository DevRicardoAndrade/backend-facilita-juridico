import Client from "../entities/Client";
import injectClient from "../utils/injectClient";
import express from "express";

const router = express.Router();
const clientController = injectClient();

router.get("/clients/:id", async (req, res) => {
  const { statusCode, data } = await clientController.get(
    Number(req.params.id)
  );
  res.status(statusCode).send(data);
});
router.post("/clients", async (req, res) => {
  const body = req.body;
  const { statusCode, data } = await clientController.post(
    Client.parse(0, body.name, body.email, body.telephone)
  );
  res.status(statusCode).send(data);
});
router.get("/clients", async (req, res) => {
  const { statusCode, data } = await clientController.getAll();
  res.status(statusCode).send(data);
});

export default router;
