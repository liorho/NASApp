const express = require('express')
const router = express.Router()
const Image = require('../models/Image')

router.post('/image', async (req,res) => {
  try {
    const image = new Image(req.body)
    await image.save()
    res.send(image)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

router.delete('/image/:id', async (req,res) => {
  try {
    const id = req.params.id
    await Image.findByIdAndDelete({ _id: id })
    res.end()
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

router.get('/images', async (req, res) => {
  try {
    const { id } = req.query
    let images = id ? await Image.findById({ _id: id }) : await Image.find({})
    images = Array.isArray(images) ? images : [images]
    res.send(images)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

module.exports = router