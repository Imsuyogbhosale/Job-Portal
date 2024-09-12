import express from 'express';
import isAuthenticated from "../middleware/isAuthonticated.js";
import { GetCompany, GetCompanyID, registerCompany, UpdateCompany } from '../controllers/company.controller.js';

const router = express.Router();

// Route for registering a new company
router.route('/register').post(isAuthenticated,registerCompany);

// Route for getting all companies for the logged-in user
router.route('/get').get(isAuthenticated, GetCompany); 

// Route for getting a specific company by ID
router.route('/get/:id').get(isAuthenticated, GetCompanyID); 

// Route for updating a specific company by ID
router.route('/update/:id').put(isAuthenticated, UpdateCompany); 

export default router;
