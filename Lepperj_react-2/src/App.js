import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <header>
      <h1> Exercise Log</h1>
      <p>A full stack MERN app that records exercises</p>
    <main>
    <div className="App">
      <Router>
        <h1><Link to="/">Homepage</Link></h1>
        <h1><Link to="/add-exercise">Add an exercise</Link></h1>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
          </div>
      </Router>
    </div>
    </main>
    <footer>© 2022 Jerrod Lepper</footer>
    </header>
  );
}

export default App;