const todoModel = require("../model/todo");

exports.todos_get_all = (req, res) => {
  todoModel
    .find()
    .then(results => {
      res.json({
        count: results.length,
        todoList: results.map(item => {
          return {
            id: item._id,
            content: item.content,
            isCheck: item.isCheck,
            createdAt: item.createdAt,
          };
        }),
      });
    })
    .catch(err => {
      res.status(400).json({
        err,
      });
    });
};

exports.todos_post_todo = (req, res) => {
  const { content } = req.body;
  const todo = new todoModel({
    content: content,
    isCheck: false,
  });

  todo
    .save()
    .then(result => {
      res.json({
        msg: "saved todo",
      });
    })
    .catch(err => {
      res.status(400).json({
        err: err,
      });
    });
};

exports.todos_update_todo = (req, res) => {
  const { content } = req.body;

  todoModel
    .findByIdAndUpdate(req.params.id, { content })
    .then(() => {
      res.json({
        msg: "updated todo",
      });
    })
    .catch(err => {
      res.status(400).json({
        err,
      });
    });
};

exports.todos_check_todo = (req, res) => {
  const { isCheck } = req.body;

  todoModel
    .findByIdAndUpdate(req.params.id, { isCheck })
    .then(() => {
      res.json({
        msg: "updated todo",
      });
    })
    .catch(err => {
      res.status(400).json({
        err,
      });
    });
};

exports.todos_delete_todo = (req, res) => {
  todoModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "deleted todo " + req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json({
        err,
      });
    });
};
