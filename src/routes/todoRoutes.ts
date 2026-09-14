import { Router } from "express";
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from "../controllers/todoController";
import { validateTodo, validateUpdateTodo } from "../middlewares/validator";

const router = Router();

router.get("/", getTodos);

// GET /api/todos/:id — Ambil satu todo berdasarkan ID
router.get("/:id", getTodoById);

router.post("/", validateTodo, createTodo);
router.put("/:id", validateUpdateTodo, updateTodo);
router.delete("/:id", deleteTodo);

export default router;
