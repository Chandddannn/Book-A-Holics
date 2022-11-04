const express = require("express")
const router = express.Router()


// All author
router.get('/', (req, res) => {
    res.render("authors/index")
})


// new author
router.get('/new', (req, res) => {
    res.render('authors/new')
})

router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router