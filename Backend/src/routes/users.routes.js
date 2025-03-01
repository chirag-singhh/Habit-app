import express from "express"

const router = express.Router();

router.route("/signup").post()
router.route("/login").post()
router.route("/logout").post()
router.route("/update-profile").put()
router.route("/check-user").get()

export default router;

