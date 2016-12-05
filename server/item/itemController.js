var itemModel = require('./itemModel.js');

module.exports = {
  items: {
    get(req, res) {
      console.log('getting items from wishlist id: ', req.body.id);
      const params = req.body.id;
      itemModel.items.getAll(params, (results) => {
        console.log('database query result: ', results);
        res.json(results);
      });
    },

    post(req, res) {
      const params = [req.body.name, req.body.id]; //TODO item name and wishlist name
      itemModel.items.addOne(params, (err, results) => {
        res.sendStatus(201);
      });
    },

    rename(req, res) {
      const params = []; //TODO item name and wishlist name
      itemModel.items.renameItem(params, (err, results) => {
        res.sendStatus(201);
      });
    },

    delete(req, res) {
      console.log('passing item id: ', req.body.itemId, 'to delete');
      const params = req.body.itemId;
      itemModel.items.deleteItem(params, (err, results) => {
        res.sendStatus(201);
      });
    },
  },
};
