import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",  // Capitalized model name
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],  // Corrected typo
        default: 'pending'
    }
}, { timestamps: true });

export const Application = mongoose.model('Application', applicationSchema);  // Capitalized model name
