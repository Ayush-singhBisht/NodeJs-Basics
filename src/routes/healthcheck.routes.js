import { Router } from "express";

import { healthcheck } from "../controllers/healthcheck.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Health check successful!" });
// });

// router.route("/").get(upload.single("avatar"), healthcheck);
router.route("/").get(healthcheck);
router.route("/test").get(healthcheck);
export default router;
