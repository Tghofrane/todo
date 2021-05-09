import React, { useState } from 'react';
import TaskForm from './TaskForm'
function Task({ tasks, deleteTask, editTask, completedTask }) {
    const [edit, setEdit] = useState({ id: null, nameValue: '', descriptionValue: '' });
    const saveEdit = (nameValue, descriptionValue) => {
        editTask(edit.id, nameValue, descriptionValue)
        setEdit({
            id: null,
            nameValue: '',
            descriptionValue: ''
        })
    }

    if (edit.id)
        return <TaskForm edit={edit} onSubmit={saveEdit} />;

    return tasks.map((task, i) => (
        <div className={task.isCompleted ? "task-card d-flex justify-content-between align-items-center completed" : "task-card d-flex justify-content-between align-items-center"} key={i}>
            <div className="d-flex align-items-end" key={task.id}>
                <h3 className="task-name">{task.name} : </h3>
                <h4 className="task-description">{task.description}</h4>
            </div>
            <div className="task-events">
                <span className="task-event pointer"
                    onClick={() => completedTask(task.id)}>{task.isCompleted ? "À faire" : "Terminée"}</span>
                <span className="task-event pointer"
                    onClick={() => setEdit({ id: task.id, nameValue: task.name, descriptionValue: task.description })}>Modifier</span>
                <span className="task-event pointer"
                    style={{ color: "#f03" }}
                    onClick={() => { if (process.browser) if (window.confirm('Voulez-vous vraiment supprimer cette tache?')) deleteTask(task.id); }}>Supprimer</span>
            </div>

        </div>
    ))
}

export default Task;