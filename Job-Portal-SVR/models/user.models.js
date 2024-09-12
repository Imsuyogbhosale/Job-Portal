import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,  // Changed to String to accommodate different formats
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['Student', 'Recruiter'],  // Fixed enum syntax
        required: true
    },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },  // URL to resume file
        resumeOriginalName: { type: String },  // Fixed typo
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
        profilePhoto: { type: String, default: "" }
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);  // Use capitalized "User" for model name
