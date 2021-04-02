import React, { useState, useEffect } from "react";
import { addTodo } from "../../Actions/";
import { editTodo } from "../../Actions/";
import { useSelector } from "react-redux";
import { achievedTodos } from "../../Actions/";
import { unachievedTodos } from "../../Actions/";
import { useDispatch } from "react-redux";
const AddTodo = ({ setComplete }) => {
    const savedTodo = useSelector((state) => state.taskReducer);
    // console.log(savedTodo);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    // const [complete, setComplete] = useState("all");
    const handleInput = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        if (savedTodo !== {}) {
            // dispatch(editTodo)(newTodo);
            // } else {
            e.preventDefault();
            if (newTodo) {
                setNewTodo("");
                dispatch(addTodo(newTodo));
            }
        } else dispatch(editTodo)(savedTodo);
    };

    // const add = (e, newTodo) => {
    //     e.preventDefault();
    //     if (newTodo) {
    //         setNewTodo("");
    //         dispatch(addTodo(newTodo));
    //     }
    // };

    useEffect(() => {
        setNewTodo(savedTodo.text);
    }, [savedTodo]);

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
