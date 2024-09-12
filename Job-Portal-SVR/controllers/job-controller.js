
import  {Job}  from '../models/job.models.js'
export const PostJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, companyId, experianceLeval, jobType, created_By, position } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !location || !companyId || !experianceLeval || !jobType || !position) {
            return res.status(400).json({
                massage: "Somthing is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            company: companyId,
            location,
            experienceLevel,
            created_By: userId,
            jobType,
            position
        });
        return res.status(201).json({
            message: "New Job Created Successfully",
            job,
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}

export const GetAllJobs = async (req, res) => {
    try {
        const Keyword = req.query.Keyword || "";
        const query = {
            $or: [
                { title: { $regex: Keyword, $options: "i" } },
                { description: { $regex: Keyword, $options: "i" } }
            ]
        };
        const jobs = await Job.find(query).populate({
            path : "company"
        }).sort({createdAt : -1})
        
        if (!jobs) {
            return res.status(404).json({
                massage: "Job not Found",
                success: true
            })
        }

        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


export const GetJobByID = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job Not Found", // Corrected "massage" to "message"
                success: false // Changed success to false when job is not found
            });
        }

        res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error", // Added a response in case of an error
            success: false
        });
    }
};


export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_By: adminId });
        if (!jobs) {
            return res.status(404).json({
                message: "Job Not Found",
                success: false
            });
        }
        return res.statusa(201).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}