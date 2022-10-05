import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/Todo/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHendler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="">Todo App</h1>
      <TodoForm addTodo={addTodoHendler} />
      {!!todos.length && (
        <TodosActions
          deleteAllTodos={deleteAllTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodos={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!todos.length ? (
        <h2>Your todo list is empty</h2>
      ) : todos.length < 2 ? (
        <h2>You have {todos.length} todo</h2>
      ) : (
        <h2>You have {todos.length} todos</h2>
      )}
    </div>
  );
}

export default App;
