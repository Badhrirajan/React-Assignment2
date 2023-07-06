import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import TaskCard from "./Card";
import BasicDropdown from "./Dropdown";

const status = [
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Not Completed",
    value: "not completed",
  },
];

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "not completed",
  });
  const [mode, setMode] = useState("create");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    return () => {};
  }, []);

  function handleTodo() {
    const todosCopy = [...todos];
    todosCopy.push(todo);
    setTodo({});
    setTodos(todosCopy);
  }

  function handleInput(e) {
    let todoCopy = {
      ...todo,
      status: "not completed",
    };
    todoCopy[e.target.id] = e.target.value;
    setTodo(todoCopy);
  }

  function handleEdit(data = {}) {
    setMode("edit");
    setTodo(data);
  }

  function handleUpdateTodo(e) {
    if (mode === "edit") {
      let todosCopy = [...todos];
      let matchedData = todosCopy.filter((d) => d.title !== todo.title);
      matchedData.push(todo);
      setTodos(matchedData);
      setTodo({});
      setMode("create");
    }
  }

  function handleDeleteTodo(title = "") {
    let todosCopy = [...todos];
    let matchedData = todosCopy.filter((d) => d.title !== title);
    setTodos(matchedData);
  }

  function renderCards(data = [], filterType = "all") {
    const _d =
      filterType === "all" ? data : todos.filter((d) => d.status === filter);
    return _d.map((d, i) => (
      <TaskCard
        data={d}
        key={`${d.title}-${i}`}
        handleEdit={handleEdit}
        handleDeleteTodo={handleDeleteTodo}
      />
    ));
  }

  return (<section>
    <div className="container mt-5">
      <div className="container-fluid">
        <h4 style={{color: "green"}}>My Todo</h4>
            <div className="row">
              <div className="col-4">
                <TextInput
                  label="Title"
                  placeholder="Enter Task title here"
                  id="title"
                  value={todo["title"]}
                  onChange={handleInput}
                  disabled={mode === "edit"}
                />
              </div>
              <div className="col-4">
                <TextInput
                  label="Description"
                  placeholder="Enter Task Description here"
                  id="description"
                  value={todo["description"]}
                  onChange={handleInput}
                />
              </div>
              <div className="col-4">
                <BasicDropdown
                  label="Status"
                  id="status"
                  options={status}
                  onSelect={handleInput}
                  value={todo["status"]}
                />
              </div>
            </div>
            <div className="row align-item-end justify-content-end">
              <button
                type="button"
                style={{backgroundColor: "rgb(131, 221, 131)", color: "white", width:"30%"}}
                class="btn btn-primary" 
                onClick={mode === "create" ? handleTodo : handleUpdateTodo}
              >
                {mode === "create" ? "Create Task" : "Edit Task"}
              </button>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row d-flex mt-3">
          <div className="col-9 text-start">
            <h4 style={{color: "green"}}>My Todo</h4>
          </div>
          <div className="col-2 flex-row-reverse">  
            <BasicDropdown
              label="Filter"
              id="filter"
              options={[{ label: "All", value: "all" }, ...status]}
              onSelect={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </div>
        </div>
        </div>
        <div className="container">
            <div className="container-fluid">
                <div className="row">{renderCards(todos, filter)}</div>
            </div>
        </div>
        </section>
  );
}