import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String   // URL to company logo
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // Capitalized model name
        required: true
    }
}, { timestamps: true });

// export default mongoose.model("Company", companySchema);  // Capitalized model name
export const Company = mongoose.model("Company", companySchema);