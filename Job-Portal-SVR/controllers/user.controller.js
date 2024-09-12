import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


// register Api 

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;

        // Log request body for debugging
        console.log("Register Request Body:", req.body);

        if (!fullname || !email || !phoneNumber || !role || !password) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashPassword,
            role
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });

    } catch (error) {
        console.log("Register Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


// login api 

// export const login = async (req, res) => {
//     try {
//         const { email, password, role } = req.body;

//         // Log request body for debugging
//         console.log("Login Request Body:", req.body);

//         if (!email || !role || !password) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         }

//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false
//             });
//         }

//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false
//             });
//         }

//         // Check if the role is correct
//         if (role !== user.role) {
//             return res.status(400).json({
//                 message: "Account does not exist with the specified role",
//                 success: false
//             });
//         }

//         const tokenData = {
//             userID: user._id,
//         };
//         const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

//         user = {
//             _id: user._id,
//             fullname: user.fullname,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             profile: user.profile
//         };

//         return res.status(200)
//             .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
//             .json({
//                 message: `Welcome back, ${user.fullname}`,
//                 success: true
//             });

//     } catch (error) {
//         console.log("Login Error:", error);
//         return res.status(500).json({
//             message: "Internal Server Error",
//             success: false
//         });
//     }
// };


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Log request body for debugging
        console.log("Login Request Body:", req.body);

        if (!email || !role || !password) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // Check if the role is correct
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does not exist with the specified role",
                success: false
            });
        }

        const tokenData = {
            userID: user._id,
        };

        // Log token data before generating token
        console.log("Token Data:", tokenData);

        let token;
        try {
            token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
            // Log generated token
            console.log("Generated Token:", token);
        } catch (error) {
            console.error("Error generating token:", error);
            return res.status(500).json({
                message: "Token generation failed",
                success: false,
            });
        }

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            profile: user.profile
        };

        return res.status(200)
            .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
            .json({
                message: `Welcome back, ${user.fullname}`,
                success: true,
                token : token
            });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


// logout api 

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout successfully",
            success: true
        });
    } catch (error) {
        console.log("Logout Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


// update Api

// export const updateProfile = async (req, res) => {
//     try {
//         const { fullname, email, bio, skills } = req.body;
//         const file = req.file;

//         // Log request body for debugging

//         const skillsArray = skills.split(",");
//         const userID = req.id; // Assuming this comes from middleware
//         let user = await User.findById(userID);

//         if (!user) {
//             return res.status(400).json({
//                 message: "User not found",
//                 success: false
//             });
//         }

//         // Updating data
//         if(fullname) user.fullname = fullname;
//         if(email) user.email = email;

//         if(profile.bio) user.profile.bio = profile.bio;

//         if(profile.skills) user.profile.skills = profile.skills;


//         // user.email = email;
//         // user.profile.bio = bio;
//         // user.profile.skills = skillsArray;

//         // Assuming phoneNumber is still part of the user model
//         if (req.body.phoneNumber) {
//             user.phoneNumber = req.body.phoneNumber;
//         }

//         // Save updated user
//         await user.save();

//         return res.status(200).json({
//             message: "Profile updated successfully",
//             user,
//             success: true
//         });

//     } catch (error) {
//         console.log("Update Profile Error:", error);
//         return res.status(500).json({
//             message: "Internal Server Error",
//             success: false
//         });
//     }
// };

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, bio, skills } = req.body;
        const file = req.file;

        // Assuming the user ID is set in the middleware
        const userID = req.id;
       
        let skillsArray ;
        if (skills) {
             skillsArray = skills.split("")
        }

        let user = await User.findById(userID);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        // Update the user's profile details
        if (fullname) user.fullname = fullname;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;



        // Assuming phoneNumber is still part of the user model
        if (req.body.phoneNumber) {
            user.phoneNumber = req.body.phoneNumber;
        }

        // Handle profile photo if file is provided
        if (file) {
            user.profile.profilePhoto = file.path; // Assuming file.path is the correct path to the uploaded file
        }

        // Save the updated user document
        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        });

    } catch (error) {
        console.error("Update Profile Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
