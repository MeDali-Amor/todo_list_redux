import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
    const [complete, setComplete] = useState("all");
    // const [filteredTodos, setFilteredTodos] = useState([]);

    return (
        <div className="App">
            <div className="App">
                <header>
                    <h1>To Do App</h1>
                    <AddTodo setComplete={setComplete} />
                    <TodosList complete={complete} />
                </header>
            </div>
        </div>
    );
}

export default App;
