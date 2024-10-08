import express from 'express';
import isAuthenticated from "../middleware/isAuthonticated.js"
import { applyJob, getApplicant, getAppliedJob, updateStatus } from '../controllers/application.controller.js';

const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getAppliedJob);
router.route("/:id/applicant").get(isAuthenticated, getApplicant);
router.route("/status/:id").get(isAuthenticated, updateStatus);

export default router;
