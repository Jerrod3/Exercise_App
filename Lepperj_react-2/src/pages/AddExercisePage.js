import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ThemeSwitcher from '../components/ThemeSwitcher';

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const exercise = {name,reps,weight,unit,date};
        const response = await fetch(`/exercises`, {
            method: 'POST',
             body: JSON.stringify(exercise),
              headers: {
                  'Content-type': 'application/json'
                },
            });
            if(response.status === 201) {
                alert("Noice! Get swoll")
            } else {
                alert('You failed to add the lift, broh. Try again broh')
            }
            history.push("/")
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter excercise here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter Reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter Weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option>lbs</option>
                <option>kgs</option>
            </select>
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;