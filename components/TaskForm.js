import React, { useState } from 'react';

function TaskForm(props) {
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const handleChangeName = e => {
        setName(e.target.value)
    }
    const handleChangeDescription = e => {
        setdescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); // not refresh when submit

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //generate random id for mapping
            name: name,
            description: description
        })
        setName(''); //set name input to '' after add event
        setdescription(''); //set description input to '' after add event
    };

    return (
        <form className="task-form row" onSubmit={handleSubmit}>
            <div className="col-md-4 sol-sm-12 form-group">
                <label htmlFor="name" className="form-label">Nom de la tâche :</label>
                <input type="text"
                    value={name}
                    name="name"
                    className="task-input m-0"
                    onChange={handleChangeName} />
            </div>
            <div className="col-md-4 sol-sm-12 form-group">
                <label htmlFor="name" className="form-label">Description de la tâche :</label>
                <input type="text"
                    value={description}
                    name="name"
                    className="task-input m-0"
                    onChange={handleChangeDescription} />
            </div>
            <div className="col-md-4 sol-sm-12 d-flex justify-content-end align-items-end">
                <button className="task-btn">Ajouter</button>
            </div>



        </form>
    )
}

export default TaskForm;