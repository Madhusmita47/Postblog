const jwt = require("jsonwebtoken")


const auth = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) { return res.status(400).send({ isAuthenticated: false,user:null, message: "user must be logged in" }) }
        let verify = jwt.verify(token, "key", (err, res) => {
            if (err) return res.status(400).send({ status: false, message: err.message })
            else {
                res.setHeaders("token", verify);
                next();  
            }
        });
}
    catch (err) {
       return res.status(500).send({status:false,message:err.message})
    }
}
module.exports.auth = auth;