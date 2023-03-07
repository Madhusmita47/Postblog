const express = require("express");
const router = express.Router();

const { register, login ,profile} = require("./controller/auth")
const { createpost, updatepost, deletepost, getpost, getallpost } =require("./controller/post.js")
const {updateuser,deleteuser,getuser}=require("./controller/users.js")
const { createcategory, getcategory } = require("./controller/catagories.js")
const mw=require("./mw")
//-----------------auth------------------
router.post('/register', register)
router.post('/login', login)
router.get("/me", mw.auth,profile)
//----------------post-----------
router.post('/createpost', createpost)
router.put('/:id', updatepost)
router.delete('/:id', deletepost,)
router.get('/:id', getpost)
router.get('/getall', getallpost)
//-------------user------------------
router.put('/:id', updateuser)
router.delete('/:id',deleteuser)
router.get('/:id', getuser)
//---------------catagory------------
router.post('/createcategory', createcategory)
router.get('/getcategory', getcategory)




module.exports=router




