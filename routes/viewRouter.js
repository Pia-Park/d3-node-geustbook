const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const data = []

router.get('/view', (req,res,next) => {
    res.render('view', { notes: data, title: "Review Everything" })
})



module.exports = router