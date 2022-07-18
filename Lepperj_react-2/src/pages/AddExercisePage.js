import React, { useState } from 'react';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { useHistory } from "react-router-dom";
import homePageImg from "../img/weights.jpg"

export const AddExercisePage = ({cardDetails,setBackgroundImg}) => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const inputs = {
        color: 'white',
        backgroundColor: 'black',
        boxShadow: '#f75e6a 0px 20px 30px -10px'
    }

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
            let ass = typeof(setBackgroundImg)
            console.log(ass)
            history.push("/" )
            
    };

    return (
        <div>
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-6 d-flex justify-content-center">
                        <div class="card text-white text-center bg-dark mb-3" style={cardDetails}>
                            <div class="card-body">
                                <h1 class="card-title"> Add Exercise</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input style={inputs}
                type="text"
                placeholder="Enter excercise here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input style={inputs}
                type="number"
                value={reps}
                placeholder="Enter Reps here"
                onChange={e => setReps(e.target.value)} />
            <input style={inputs}
                type="number"
                placeholder="Enter Weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select style={inputs}
                value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option>lbs</option>
                <option>kgs</option>
            </select>
            <input style={inputs}
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