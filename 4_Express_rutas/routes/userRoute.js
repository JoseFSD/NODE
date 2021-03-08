const express = require('express')
const router = express.Router()

//localhost:3000/user
router.get('/', (req, res) => {
    res.send('USERRRRRRRR')
})

//localhost:3000/user/persona
router.get('/persona', (req, res) => {
    res.send('persona')
})


module.exports = router;