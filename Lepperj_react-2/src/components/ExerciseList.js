import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, onDelete, onEdit, setBackgroundImg }) {
    return (
        <table id="movies">
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    setBackgroundImg={setBackgroundImg}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
