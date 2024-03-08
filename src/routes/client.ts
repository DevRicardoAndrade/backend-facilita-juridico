import injectClient from "../utils/injectClient";
import express from "express";

const router = express.Router();

router.get("/clients/:id", async (req, res) => {
  const clientController = injectClient();
  const { statusCode, data } = await clientController.get(
    Number(req.params.id)
  );
  res.status(statusCode).send(data);
});

export default router;
