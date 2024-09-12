// import jwt from "jsonwebtoken";

// const isAuthonticated = async (req, res, next) => {
//     try {
//         const { token } = req.body;  // Assuming the token is in the body as 'token'
//         console.log({token})
//         if (!token) {
//             return res.status(400).json({
//                 message: "User not authenticated",
//                 success: false,
//             });
//         }

//         const decoded = await jwt.verify(token, process.env.SECRET_KEY);

//         if (!decoded) {
//             return res.status(401).json({
//                 message: "Invalid token",
//                 success: false,
//             });
//         }

//         req.id = decoded.userID; // Attach the user ID to the request object
//         next();

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message: "Internal server error",
//             success: false,
//         });
//     }
// }

// export default isAuthonticated;

import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        // Extract token from Authorization header (e.g., "Bearer <token>")
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Extract token after "Bearer"

        if (!token) {
            return res.status(401).json({
                message: "Token missing or invalid",
                success: false,
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // If verification fails
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        // Attach the user ID to the request object
        req.id = decoded.userID;   // hs lkutun yeto'
        next();
        
    } catch (error) {
        console.error("Authentication Error:", error); // Log error details
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export default isAuthenticated;
