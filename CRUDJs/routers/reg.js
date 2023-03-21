const express = require('express')
const router = express.Router()
const Reg = require('../models/reg')

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

router.post('/', async(req, res) => {
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