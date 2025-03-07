import { Router } from "express";
import { deleteUrl } from "../controllers/delete";
import { generateShort } from "../controllers/generate-short";
import { getAllUrls } from "../controllers/get-all-urls";
import { redirect } from "../controllers/redirect-to-original";
import { visitHistory } from "../controllers/visit-history";

const router = Router();

router.route("/get-all-url").get(getAllUrls);
router.route("/generate-short-url").post(generateShort);
router.route("/:shortId").get(redirect);
router.route("/delete-url/:id").delete(deleteUrl);
router.route("/get-analytics/:shortId").get(visitHistory);

export default router;
