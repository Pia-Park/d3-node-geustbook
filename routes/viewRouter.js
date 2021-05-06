const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const jsonFile = fs.readFileSync('./notes.json', 'utf8');
const data = JSON.parse(jsonFile);

router.get('/view', (req,res,next) => {
    res.render('view', { notes: data, title: "Review Everything" })
})



module.exports = router