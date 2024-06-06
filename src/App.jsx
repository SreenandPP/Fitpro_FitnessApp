import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FitNav from './components/FitNav';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import{Routes,Route} from 'react-router-dom'
import Workouts from './pages/Workouts';
import Diet from './pages/Diet';
import Bmi from './pages/Bmi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import WorkoutDetails from './pages/WorkoutDetails';
import DietDetails from './pages/DietDetails';
import Profile from './pages/Profile';
import { useContext } from 'react';
import { TokenAuthContext } from './Context Api/AuthContext';



function App() {

  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)
  return (
    <>
     
      <Routes>
          <Route path='/' Component={Landing}/>
          <Route path='/auth' Component={Auth}/>
          <Route path='/workouts' element={authStatus?<Workouts/>:<Landing/>} />
          <Route path='/diet' element={authStatus?<Diet/>:<Landing/>} />
          <Route path='/bmi' Component={Bmi}/>
          <Route path='/workoutdetails' Component={WorkoutDetails}/>
          <Route path='/dietdetails' Component={DietDetails}/>
          <Route path='/profile' Component={Profile}/>
         
          
      </Routes>

      <ToastContainer/>

      
    </>
  )
}

export default App
