import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Button from 'ui_controls/Button';
import ListItem from 'ui_controls/ListItem';

const App = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todoData');
    if (savedTodos) return JSON.parse(savedTodos);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todo));
  }, [todo]);

  function addToTodo() {
    const tData = prompt('What you want to add ?');
    tData &&
      setTodo((prev) => [
        ...prev,
        { name: tData, completed: false, timestamp: Date.now() },
      ]);
  }

  function removeToTodo(ts) {
    setTodo(todo.filter(({ timestamp }) => timestamp !== ts));
  }

  function markToTodo(ts) {
    setTodo(
      todo.map((data) => {
        if (data.timestamp === ts) data.completed = true;
        return data;
      })
    );
  }

  return (
    <div className="mt-10 mx-auto max-w-4xl p-6 boxybox">
      <Button title="Add Item" action={addToTodo} />
      <Button title="Clear All" action={() => setTodo([])} />
      <h6>My ToDo's</h6>
      {todo.map(
        (item) =>
          !item.completed && (
            <ListItem
              title={item.name}
              completed={item.completed}
              action={() => markToTodo(item.timestamp)}
            />
          )
      )}
      <h6>Completed</h6>
      {todo.map(
        (item) =>
          item.completed && (
            <ListItem title={item.name} completed={item.completed} />
          )
      )}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
