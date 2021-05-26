const express = require("express");
const router = express.Router();

const {
  todos_get_all,
  todos_post_todo,
  todos_delete_todo,
  todos_check_todo,
  todos_update_todo,
} = require("../controller/todo");

router.get("/", todos_get_all);

router.post("/", todos_post_todo);

router.post("/check/:id", todos_check_todo);

router.post("/:id", todos_update_todo);

router.delete("/:id", todos_delete_todo);

module.exports = router;
