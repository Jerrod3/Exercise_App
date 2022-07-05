import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit, setBackgroundImg}) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const newExercise = exercises.filter(exercise => exercise._id !== _id);
            setExercises(newExercise);
        } else {
            console.log(`Failed to delete movie with id = ${_id}, status code ${response.status}`)
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise)
        history.push("/edit-exercise")
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
        <div class="col-sm-6 d-flex justify-content-center">
            <div class="card text-white text-center bg-dark mb-3" style={{ maxWidth: 500 }}>
                <div class="card-body"></div>
                    <h2 className={`text-capitalize h1 mb-4 w-100 text-center`}>List of Exercises</h2>
                </div>
            </div>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit} setBackgroundImg={setBackgroundImg}></ExerciseList>
        </>
    );
}

export default HomePage;