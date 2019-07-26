const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

// @route     GET api/todos
// @desc      Get all todos
// @acess     Public
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });

    res.json(todos);
    console.log('From routes:', todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/todos
// @desc      Create a todo
// @acess     Public
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      todo: req.body.todo
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/todos/:id
// @desc      Delete a todo
// @acess     Public
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo no found' });
    }

    await todo.remove();
    res.json(todo);
  } catch (error) {
    console.log(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
