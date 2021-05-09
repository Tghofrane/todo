import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const addTask = task => {
        if ((!task.name || /^\s*$/.test(task.name)) || (!task.description || /^\s*$/.test(task.description))) return // to not accept empty string
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    const completedTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const deleteTask = id => {
        const deleteArray = [...tasks].filter(task => task.id !== id);
        setTasks(deleteArray);
    }

    const editTask = (taskId, newValue) => {
        if ((!newValue.name) || (!newValue.description)) return // to not accept empty string
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }

    return (
        <div className="py-5">
            <h2 className="pb-3">Liste des tâches:</h2>
            <Task tasks={tasks} completedTask={completedTask} deleteTask={deleteTask} editTask={editTask} />
            <h2 className="pt-5 pb-3">Créez une nouvelle tâche:</h2>
            <TaskForm onSubmit={addTask} />
        </div>
    )
}

export default TaskList;