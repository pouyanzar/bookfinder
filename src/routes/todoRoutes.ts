import express from "express";
import { getAllTodos, addTodo } from "../controllers/todoController";
const router = express.Router();

// http://localhost:8000/todos
router.route("/")
.get(getAllTodos) // GET  http://localhost:8000/todos
.post(addTodo) // POST  http://localhost:8000/todos

router.route("/:id")

export default router;
