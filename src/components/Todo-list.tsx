import { useState } from "react";
import Button from "./Button";
import Todo from "./Todo";
import { TodoItem } from "../types/todo-items";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const completedItems = todoItems.filter((item) => item.completed).length;
  const totalItem = todoItems.length;

  const handleAddTodoItems = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    const newItem = (
      event.currentTarget.elements.namedItem("todoInput") as HTMLInputElement
    ).value.trim();
    console.log(newItem);

    if (newItem !== "") {
      setTodoItems([
        ...todoItems,
        {
          id: Date.now().toString(),
          title: newItem,
          completed: false,
        },
      ]);
      event.currentTarget.reset();
    }
  };

  const onToggleCompleted = (id: string) => {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onDeleteItem = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-50">
      <div className="w-full max-w-md border rounded-lg p-6 shadow-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Todo List</h2>
          <p>
            {completedItems}/{totalItem}
          </p>
        </div>

        <form
          onSubmit={handleAddTodoItems}
          className="flex items-center space-x-2"
        >
          <input
            name="todoInput"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <Button text="Add" type="submit" />
        </form>
        {todoItems.map((item, index) => {
          return (
            <>
              <Todo
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
                onToggle={onToggleCompleted}
                onDelete={onDeleteItem}
              />
              {index !== todoItems.length - 1 && (
                <hr className="mt-4 w-full border-gray-300" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
