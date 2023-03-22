const express = require('express')
const router = express.Router()
const Reg = require('../models/reg')
const jwt = require('jsonwebtoken') // this allows us to determine that the user is legit 

router.get('/', async(req, res) => {
    try{
        const reg = await Reg.find() 
        res.json(reg)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const reg = await Reg.findById(req.params.id)
        res.json(reg)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/register', async(req, res) => {
    console.log('regis')
    const reg = new Reg({
        name: req.body.name,
        tech: req.body.tech,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
    });
    reg.save()
    .then(() => {
        res.status(201).json(reg);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
})

router.post('/login', async (req, res) => {
     const user = await Reg.findOne({ email: req.body.email, password: req.body.password});
     if(user) { 
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret123')
        // res.send('Login Successfull')
        return res.json({ status: 'ok', user: token})
     } else{
        return res.json({ status: 'error', user: false })
     }
})

router.get('/home', async (req, res) => {
    // try {
        const token = req.headers["x-access-token"];
       if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
    // const decoded = jwt.verify(token, 'secret123')
    // const email =  decoded.email
    // const user = await Reg.findOne({ email: email })
    // return res.json({ status: 'ok', user: user})
    // } catch(error) {
    //     console.log(error)
    //     res.json({status: 'error', error: 'invalid token' })
    // }
})

router.patch('/:id', async(req, res) => {
    try {
        const reg = await Reg.findById(req.params.id)
        reg.sub = req.body.sub
        const a1 = await reg.save()
        res.json(a1);
    }catch(err) {
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const reg = await Reg.findById(id)
        if (reg) {
            await reg.deleteOne()
            res.json({ message: 'Alien removed' })
        } else {
            res.status(404).json({ message: 'Alien not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router