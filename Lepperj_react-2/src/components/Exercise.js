import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import lady from '../img/lady.jpg'
function Exercise({ exercise, onDelete, onEdit, setBackgroundImg }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdEdit onClick={ () => { onEdit(exercise); setBackgroundImg(lady);}}/></td>
            <td>< MdDeleteForever onClick={ () => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;