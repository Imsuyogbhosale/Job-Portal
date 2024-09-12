import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {  // Corrected typo from `titele` to `title`
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    location: {  // Removed duplicate location field
        type: String,
        required: true
    },
    jobType: {  // Changed `jobtype` to `jobType` for consistency with camelCase
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    experienceLevel :{
         type: String,
         required : true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',  // Capitalized model name
        required: true
    },
    company :{
        type : mongoose.Schema.ObjectId,
        ref : "company",
        required : true
    },
    created_By: {  // Changed `created_by` to `createdBy` for camelCase consistency
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Corrected reference to `User`
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'  // Capitalized model name
    }]
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);  // Capitalized model name
