const candidateModel = require("../models/candidateModel");


exports.addCandidate = async (req) => {
    try {
        let reqBody = req.body;
        let result = await candidateModel.create(reqBody);
        return {status:"success", message:result}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


exports.totalCandidate = async (req) => {
    try {
        let result = await candidateModel.aggregate([
            {$group:{_id:"$id",total:{$count:{}}}}
        ])
        return {status:"success", message:result}
    } catch (e) {
        console.log(e)
        return {status:"fail", message:"Something Went Wrong"}
    }
}
exports.ListCandidateByStatus = async (req, res) => {
    try {
        let status = req.params.status;

        let result = await candidateModel.aggregate([
            { $match: { status: status } },
            {
                $group: {
                    _id: null,
                    totalCount: { $sum: 1 },
                    data: {
                        $push: {
                            _id: "$_id",
                            experience: "$experience",
                            fullName: "$fullName",
                            status: "$status",
                            createdDate: {
                                $dateToString: {
                                    date: "$createdDate",
                                    format: "%d-%m-%Y"
                                }
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalCount: 1,
                    data: 1
                }
            }
        ]);

        if (result.length > 0) {
            return { status: "success", totalCount: result[0].totalCount, data: result[0].data };
        } else {
            return { status: "success", totalCount: 0, data: [] };
        }
    } catch (e) {
        console.log(e);
        return { status: "fail", message: "something went wrong" };
    }
};

exports.findAllCandidte = async (req) => {
    try {

        let result = await candidateModel.find()
        return({status:"success", data:result});
    } catch (e) {
        console.log(e)
        return {status:"fail", message:"Something Went Wrong"}
    }
}




// counting value gender male and femele value


exports.readGender = async (req) => {
    try {
        let result = await candidateModel.aggregate([
            {
                $group: {
                    _id: "$gender",
                    total: { $sum: 1 }
                }
            }
        ]);

        let maleCount = 0;
        let femaleCount = 0;

        result.forEach(item => {
            if (item._id === "male") {
                maleCount = item.total;
            } else if (item._id === "female") {
                femaleCount = item.total;
            }
        });

        return { 
            status: "success", 
            message: {
                maleCount: maleCount,
                femaleCount: femaleCount
            }
        };
    } catch (e) {
        console.log(e);
        return { status: "fail", message: "Something Went Wrong" };
    }
};


// delete candidate
exports.DeleteCandidate = async (req, res)=>{
    try {
        let id = req.params.id;
        let matchItemDelete = {_id:id};
        let data = await candidateModel.deleteOne(matchItemDelete)
        return({status:"success", data:data});

    } catch (e) {
        console.log(e)
        return {status:"fail", message:"something went wrong"}
    }
}




