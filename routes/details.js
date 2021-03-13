const express = require('express')
const name = require('../models/name')
const router = express.Router()
const Detail = require('../models/name')

router.get('/', async(req, res) => {

    //we will be sending a async request.
    try {

        const details = await Detail.find()
        res.json(details)

    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {

    //we will be sending a async request.
    try {

        const details = await Detail.findById(req.params.id)// params not body since it is a URL not Body
        res.json(details)

    } catch (err) {
        res.send('Error' + err)
    }
})


router.post('/' , async(req , res) =>{
    const name = new Detail({
        name: req.body.name,
        intrest: req.body.intrest,
    })

    try{
        const data = await name.save()
        res.json(data)

    }catch(err){
        res.send('Error' + err)
    }

})

router.patch('/:id' , async(req , res)=>{
    try{
        const name = await Detail.findById(req.params.id)
        name.intrest = req.body.intrest
        const data = await name.save()
        res.json(data)

    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id' , async(req , res)=>{
    try{
        const name = await Detail.findById(req.params.id)
        name.intrest = req.body.intrest
        const data = await name.remove()
        res.json(data)

    }catch(err){
        res.send('Error')
    }
})
module.exports = router