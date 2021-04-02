import React from "react";
import "./todo.css";
import { editTodo } from "../../Actions/";
import { saveTodo } from "../../Actions/";
import { completeTodo } from "../../Actions";
import { useDispatch } from "react-redux";
const Todo = ({ task }) => {
    const dispatch = useDispatch();
    const completeHandler = () => {
        dispatch(completeTodo({ id: task.id }));
    };

    const editHandler = () => {
        dispatch(editTodo({ id: task.id }));
    };

    const saveHandler = (task) => {
        dispatch(saveTodo(task));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${task.completed ? "completed" : ""}`}>
                {task.text}
            </li>
            <div className="btn-container">
                <button className="done-btn" onClick={completeHandler}>
                    Done
                </button>
                <button className="edit-btn" onClick={() => saveHandler(task)}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Todo;
