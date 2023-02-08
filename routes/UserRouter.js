const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get all data from server.')
})
router.post('/', (req, res) => {
    res.send('Insert data into server')
})
router.put('/', (req, res) => {
    res.send('Modify an existing data.')
})
router.delete('/', (req, res) => {
    res.send('Delete data from server.')
})

module.exports = router