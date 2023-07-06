import React from "react";

export default function TaskCard({
  data = {},
  handleEdit = (e) => {},
  handleDeleteTodo = (e) => {},
}) {
  return (
    <div className="col-md-3">
      <div class="card box mt-3">
        <div class="card-body">
          <div className="row">
            <h4><b>Title: {data.title}</b></h4>
            <p>Description: {data.description}</p>
            <p>Status: {data.status}</p>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn"
                style={{backgroundColor: "rgb(29, 221, 67)", color: "white"}}
                id="editButton"
                onClick={() => handleEdit(data)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn"
                style={{backgroundColor: "rgb(206, 158, 68)", color: "white"}}
                onClick={() => handleDeleteTodo(data.title)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}