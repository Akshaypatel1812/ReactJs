import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './features/todoSlice';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className='text-xl bg-slate-400 py-4 text-white text-center font-semibold rounded-lg my-3'>Todos</h1>
      <AddTodo />
      <div className="mx-auto max-w-6xl">
        {todos.length > 0 ? (
          todos.map(todo => (
            <div key={todo.id} className="flex items-center justify-between bg-gray-100 rounded-lg shadow-md p-4 my-2">
              <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} checked={todo.checked} className="mr-2 h-5 w-5 text-green-600"/>
              <span className="text-lg">{todo.text}</span>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </div>
          ))
        ) : (
          <div className='text-lg text-red-700 font-semibold text-center mt-4'>No todos yet</div>
        )}
      </div>
    </>
  );
}

export default App;
