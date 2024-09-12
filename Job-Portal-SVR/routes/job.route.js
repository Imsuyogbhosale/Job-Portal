import express from 'express';
import isAuthenticated from '../middleware/isAuthonticated.js';
import { getAdminJob, GetAllJobs, GetJobByID, PostJob } from '../controllers/job-controller.js';
// import isAuthenticated from '../middleware/isAuthonticated.js';


const router = express.Router();

router.route("/post").post(isAuthenticated, PostJob);
router.route("/Get").get(isAuthenticated, GetAllJobs);
router.route("/getAdminJob").post(isAuthenticated, getAdminJob);
router.route("/Get/:id").get(isAuthenticated, GetJobByID);


export default router;
