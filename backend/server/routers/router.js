const express = require("express");
const router = express.Router();
const users = require("../models/user");

{ /*
router.get("/", (req, res)=> {
    console.log("connect");
});  */}

router.post("/register", async (req, res)=> {
    //console.log(req.body);

    const {nome,senha,celular,email,descricao} = req.body;

    if(!nome || !senha || !celular || !email || !descricao){
        res.status(404).json("pplz fill the data");
    }

    try {

        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json("this user is already present");
        }else {
            const adduser = new users({
                nome,senha,celular,email,descricao
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

//get userdata

router.get("/getdata", async(req, res)=>{

    try {
       const userdata = await users.find();
       res.status(201).json(userdata);
       console.log(userdata); 

    } catch (error) {
        res.status(404).json(error);
    }

})

module.exports = router;