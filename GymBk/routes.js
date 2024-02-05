const express = require("express");
const router = express.Router();
const cors = require("cors");
const Member = require("./models/Member");
const bcrypt = require("bcrypt")
const saltRounds = 10;
var app = express();
// let newPass ; 
app.use(cors())

router.get("/members", async (req, res) => {
	const members = await Member.find()
	res.send(members)
})

router.post("/members/update", async(req,res) =>{
    let newPass;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
       newPass = String(hash)  
       
    });
    const newMember = {
		MemberName: req.body.name,
        MemberAge: req.body.age,
        MemberEmail:req.body.email,
        MemberPass: newPass,
        MemberSub:req.body.sub
	}
	await Member.create(newMember);

	res.send({
		message: "new memeber fr was added succesfully."
	})
    console.log(newPass)
    console.log(newMember)
})
module.exports = router;