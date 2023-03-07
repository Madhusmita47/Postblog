
const User = require("../model/user");
const jwt=require("jsonwebtoken")

//REGISTER
const register= async function (req,res){
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPass = await bcrypt.hash(req.body.password, salt);
        console.log(req.body)
        const email = req.body.email
        let emailexist = await User.findOne({ email: email })
        if(emailexist){return res.status(400).json({status:false,message:"email already exist"})}
        const user = await User.create(req.body)
        res.status(200).json({user,message:"user created successfully"});
    } catch (err) {
        res.status(500).json(err);
    }
};

//LOGIN
const login = async function (req, res) {
    try{
    if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, msg: "data is not present" })
    let emailId = req.body.email;
    let password = req.body.password;


    if (!emailId) return res.status(400).send({ status: false, msg: "username not present" })
  
        if (!password) return res.status(400).send({ status: false, msg: "password is  not present" })
        let user= await User.findOne({ email: emailId, password: password });
        if (!user)
            return res.status(400).send({status: false,
            msg: "Email Id or the Password is not corerct",
            });
    
        let token = jwt.sign(
            {
               userid:user._id
            },"key");
        res.setHeader("x-api-key", token);
        res.status(200).send({ status: true, data: token });
    }
    catch (Err) {
        return res.status(500).send({ status: false, msg: Err.message });
    }
};
const profile = async function (req, res) {
    try {
        let userid = req.headers.token.userid
        const data = await User.findOne({ _id: userid });
        if (!data)     return res.status(400).send({ isAuthenticated: false, user: data }) 
        res.status(200).send({ isAuthenticated: true, user: data })
    }
    catch (err) {
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports.register = register;
module.exports.login = login
module.exports.profile = profile;
