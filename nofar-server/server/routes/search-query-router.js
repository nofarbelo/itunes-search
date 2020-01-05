
const express = require('express')

const SearchQueryCtrl = require('../controllers/search-query-ctrl')

const router = express.Router()


router.post('/query', SearchQueryCtrl.updatOrCreateeSearchQuery)
router.get('/popular', SearchQueryCtrl.getPopularSearchQuery)

module.exports = router