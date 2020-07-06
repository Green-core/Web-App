const router = require('express').Router();
let Signup = require('../models/signup.model');

router.route('/').get((req,res)=>{
    Signup.find()
    .then(signup => res.json(signup))
    .catch(err=>res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) =>{
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;
    const gender= req.body.gender;
    const emailadress= req.body.emailadress;
    const password= req.body.password;
    const contactno= req.body.contactno;
    const adress= req.body.adress;

    const newSignup= new Signup({
        firstname,
        lastname,
        gender,
        emailadress,
        password,
        contactno,
        adress,
    });

    newSignup.save()
    .then(() => res.json('New user added!'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Signup.findById(req.params.id)
    .then(signup => res.json(signup))
    .catch(err=>res.status(400).json('Error: ' +err));
});




module.exports = router;