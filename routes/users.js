var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.create);
router.put('/:id', usersCtrl.update);
router.delete('/:id', usersCtrl.delete);
router.get('/new', usersCtrl.new);
router.get('/:id/edit', usersCtrl.edit);

module.exports = router;
