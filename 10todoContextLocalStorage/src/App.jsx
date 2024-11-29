import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo to the list
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update an existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    // Check if there are todos stored in localStorage
    if (storedTodos) {
      try {
        // Parse the todos and handle if the data is invalid
        const parsedTodos = JSON.parse(storedTodos);

        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos); // Set the todos if valid
        } else {
          console.error("Invalid todos format in localStorage");
        }
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []); // This effect runs once when the component mounts

  // Store todos to localStorage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to localStorage
    }
  }, [todos]); // This effect runs whenever the todos state changes

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
