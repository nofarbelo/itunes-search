const SearchQuery = require('../models/search-query-model')

updatOrCreateeSearchQuery = async (req, res) => {
    SearchQuery.findOne({name: req.body.payload }, (err, searchQuery) => {
        let currentQuery;
        if (!searchQuery) {
            currentQuery = new SearchQuery({name: req.body.payload, count: 1});
        } else {
            currentQuery = searchQuery;
            currentQuery.count += 1;
        }

        currentQuery
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: currentQuery._id,
                    message: 'Query updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Query not updated!',
                })
            })
    })
}


getPopularSearchQuery = async (req, res) => {
    const LIMIT = 10
    console.log(req.params)
    
    await SearchQuery.find().sort({count: -1}).limit(LIMIT).select({"name":1, "_id":0}).exec((err, searchQueries) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!searchQueries.length) {
            return res
                .status(404)
                .json({ success: false, error: `Queries not found` })
        }
        return res.send(searchQueries);
    })
}

module.exports = {
    updatOrCreateeSearchQuery,
    getPopularSearchQuery
}
