import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import homePageImg from "./img/weights.jpg"
import addExcerciseImg from "./img/man.jpg"

function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState();
    const[backgroundImg, setBackgroundImg] = useState(homePageImg);
    const[hover1,setHover1] = useState()
    const[hover2,setHover2] = useState()

    const cardDetails = {
      maxWidth: 500,
      borderRadius: 20,
      boxShadow: '#f75e6a 0px 20px 30px -10px'
    }

    const linkDetails = {
      textDecoration: 'none',
      color: hover1 ? 'red' : 'white'
    }

    const linkDetails2 = {
      textDecoration: 'none',
      color: hover2 ? 'red' : 'white'
    }

  return (
<div class="bg-image" 
            style={{ backgroundImage: `url(${backgroundImg}`,backgroundRepeat:"no-repeat", backgroundSize: "cover"  }} >
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-6 d-flex justify-content-center">
          <div class="card text-white text-center bg-dark mb-3" style={cardDetails}>
            <div class="card-body">
              <h1 class="card-title"> Exercise Log</h1>
                <p class="card-text">A full stack MERN app that records exercises</p>
              </div>
            </div>
          </div>
        <main>
          <div className="App">
            <Router>
            <div class="row d-flex justify-content-center">
              <div class="col-sm-6 d-flex justify-content-center">
                <div class="card text-white text-center bg-dark mb-3" style={cardDetails}>
                  <div class="card-body">
                    <h1 class="card-title"><Link style={linkDetails}
                     onClick={() => setBackgroundImg(homePageImg)} to="/" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false) }
                     >Homepage</Link></h1>
                 </div>
              </div>
            </div>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="col-sm-6 d-flex justify-content-center">
                <div class="card text-white text-center bg-dark mb-3" style={cardDetails}>
                  <div class="card-body">
                    <h1 class="card-title"><Link to="/add-exercise" style={linkDetails2} onClick={() => setBackgroundImg(addExcerciseImg)} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} setBackgroundImg={setBackgroundImg}  >Add an exercise</Link></h1>
               </div>
               </div>
               </div>
               </div>
                <div className="App-header">
                 <Route path="/" exact>
                    <HomePage setExerciseToEdit={setExerciseToEdit} setBackgroundImg={setBackgroundImg} cardDetails={cardDetails}/>
                  </Route>
                  <Route path="/add-exercise">
                    <AddExercisePage cardDetails={cardDetails}/>
                  </Route>
                  <Route path="/edit-exercise">
                    <EditExercisePage exerciseToEdit={exerciseToEdit} cardDetails={cardDetails}/>
                  </Route>
                </div>
            </Router>
          </div>
        </main>
    </div>
  </div>
  <footer className='text-center'>© 2022 Jerrod Lepper</footer>
</div>
  );
}

export default App;