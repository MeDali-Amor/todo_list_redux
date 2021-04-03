import React, { useState } from "react";
import { addTodo } from "../../Actions/";
import { useDispatch } from "react-redux";
import "./AddTodo.css";

const AddTodo = ({ setComplete }) => {
    // States
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    // Functions
    const handleInput = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo) {
            setNewTodo("");
            dispatch(addTodo(newTodo));
        }
    };

    return (
        <div className="todo-from">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    className="todo-input"
                    onChange={handleInput}
                    value={newTodo}
                />
                <button className="todo-btn" type="submit">
                    Add Task
                    <i className="fas fa-plus-sqaure"></i>
                </button>
                <div>
                    <select
                        className="select"
                        /*onSubmit={completeHandler}*/
                        onChange={(e) => setComplete(e.target.value)}
                        name="What To Do"
                        id="choose"
                    >
                        <option value="all">All</option>
                        <option value="achieved">Achieved</option>
                        <option value="unachieved">Unachieved</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
