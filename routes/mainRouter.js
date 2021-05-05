const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const data = []

router.get('/', (req,res,next) => {
    res.render('index', { notes: data, title: "Shopping List" })
})

// router.post('/write', (req, res, next) => {
//     res.render('write', {notes: data, title: "Write anything you want"})

//     data.push({
//         id: Math.random(),
//         note: req.body.note
//     })
//     fs.writeFile(path.join(__dirname, '..','notes.json'), JSON.stringify(data, null, 2), () => {
//         res.status(302).redirect('/')
//     })
// })

module.exports = router