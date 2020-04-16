module.exports = function(express){
    express.get('/', function(req, res){
                Item.find()
          .then(items => res.render('home/index"', { items }))
          .catch(err => res.status(404).json({ msg: 'No items found' }));
    });
};
