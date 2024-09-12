import { Company } from "../models/company.model.js";

// Register a new company
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Check if companyName is provided
        if (!companyName) {
            return res.status(400).json({
                message: "Something is missing", // Typo corrected in the response message
                success: false
            });
        }

        // Check if the company already exists
        let company = await Company.findOne({
            name: companyName
        });

        if (company) {
            return res.status(400).json({
                message: "You cannot register the same company",
                company,
                success: false
            });
        }

        // Create a new company
        company = await Company.create({
            name: companyName,
            userID: req.id, // Assuming req.id is the user ID
        });

        return res.status(201).json({
            message: "Company Registered Successfully",
            success: true
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// Get all companies for the logged-in user
export const GetCompany = async (req, res) => {
    try {
        const userID = req.id; // Logged-in user ID
        const companies = await Company.find({ userID });

        // Check if companies exist
        if (!companies.length) {
            return res.status(400).json({
                message: "Companies not found", // Corrected typo from "massage" to "message"
                success: false
            });
        }

        return res.status(200).json({
            companies, // Corrected from "Companies" to "companies"
            success: true
        });
    } catch (error) {
        console.error("Error fetching companies:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// Get a company by ID
export const GetCompanyID = async (req, res) => {
    try {
        const companyID = req.params.id;
        const company = await Company.findById(companyID); // Corrected from findbyID to findById

        // Check if the company exists
        if (!company) {
            return res.status(400).json({
                message: "Company not found", // Corrected typo from "massage" to "message"
                success: false
            });
        }

        return res.status(200).json({
            company, // Corrected from "Company" to "company"
            success: true
        });
    } catch (error) {
        console.error("Error fetching company:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// Update a company by ID
export const UpdateCompany = async (req, res) => { // Corrected parameter order to req, res
    try {
        const { name, description, website, location } = req.body;

        const updateData = { name, description, website, location };
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        // Check if the company exists
        if (!company) {
            return res.status(400).json({
                message: "Company not found", // Corrected typo from "massage" to "message"
                success: false // Corrected from true to false
            });
        }

        return res.status(200).json({
            message: "Company information updated",
            success: true
        });
    } catch (error) {
        console.error("Error updating company:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
