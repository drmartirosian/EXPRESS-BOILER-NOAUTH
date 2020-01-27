var User = require('../models/user');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteTodo,
    new: newTodo,
    edit,
  };
  
  function index(req, res) {
      res.render('users/index', { title: 'users' })
  };

  function show(req, res) {
  }
  function create(req, res) {
  }
  function update(req, res) {
  }
  function deleteTodo(req, res) {
  }
  function newTodo(req, res) {
  }
  function edit(req, res) {
  }