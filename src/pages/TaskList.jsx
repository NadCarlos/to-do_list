import React, { useState } from 'react';
import LMain from '../layouts/LMain';
import todos from '../data/todos.json';

export default function TaskList(props) {
  const [taskList, setTaskList] = useState(todos);

  const handleToggleComplete = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(taskList.length / tasksPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray' : 'white'}`}>
      <LMain>
        <h1 className={`text-3xl font-semibold text-${isDarkMode ? 'white' : 'black'}`}>
          Lista de Tareas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-4">
          {currentTasks.map((p) => (
            <div
              key={p.id}
              className={`p-4 border rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}
            >
              <span className="text-lg">{p.title}</span>
              <div className="flex items-center mt-2">
                <span
                  className={`text-${p.completed ? 'green' : 'red'}-500`}
                >
                  {p.completed ? 'Completado' : 'Pendiente'}
                </span>
                <div className="ml-2"></div> {/* Agregar margen horizontal aquí */}
                <button
                  onClick={() => handleToggleComplete(p.id)}
                  className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700`}
                >
                  Cambiar Estado
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 ${currentPage === 1 ? '' : ''
              }`}
          >
            Página Anterior
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 ${currentPage === totalPages ? '' : ''
              }`}
          >
            Página Siguiente
          </button>
        </div>
      </LMain>
    </div>
  );
}