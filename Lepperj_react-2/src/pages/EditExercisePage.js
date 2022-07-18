import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({exerciseToEdit,cardDetails}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const exercise = {name,reps,weight,unit,date};
        console.log(exercise)
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(exercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the exercise!");
        } else {
             alert(`Failed to edit exercise, status code = ${response.status}`);
        }     history.push("/");
    };
    return (
        <div>
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-6 d-flex justify-content-center">
                        <div class="card text-white text-center bg-dark mb-3" style={cardDetails}>
                            <div class="card-body">
                                <h1 class="card-title"> Edit Exercise</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
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
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}

export default EditExercisePage;