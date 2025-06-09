'use client'
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

const Todolist = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Human Interaction Designs',
      date: 'Tuesday, 30 June 2024',
      completed: false,
    },
    {
      id: 2,
      title: 'Computer Graphics',
      date: 'Wednesday, 1 July 2024',
      completed: false,
    },
    {
      id: 3,
      title: 'Software Engineering',
      date: 'Thursday, 2 July 2024',
      completed: false,
    },
    // {
    //   id: 4,
    //   title: 'Artificial Intelligence',
    //   date: 'Friday, 3 July 2024',
    //   completed: false,
    // },
  ]);
  const [AddToDoList, setAddToDoList] = useState(false)

  const toggleCheck = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="h-full px-5 ">
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h1 className="text-xl font-bold ">To Do List</h1>
        </div>
        <div className='flex'>
          <span className='text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-600 duration-300 ease-in-out rounded-md cursor-pointer px-2 py-1 text-xs'>Add</span>
        </div>
      </div>

      <div className="max-h-55 overflow-y-auto pr-2 space-y-4 no-scrollbar">
        {tasks.map(task => (
          <div
            key={task.id}
            className="flex items-start gap-4 pb-3 border-b border-gray-300"
          >
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => toggleCheck(task.id)}
              className="w-5 h-5 accent-orange-600 focus:ring-orange-600 border-gray-300 rounded mt-1 cursor-pointer"
            />
            <label htmlFor={`task-${task.id}`} className="cursor-pointer">
              <h2
                className={`text-base font-medium ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.title}
              </h2>
              <p className="text-sm text-gray-400">{task.date}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
