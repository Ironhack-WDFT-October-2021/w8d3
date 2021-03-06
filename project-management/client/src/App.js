import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectList from './pages/ProjectList'
import ProjectDetails from './pages/ProjectDetails'
import EditProject from './pages/EditProject'
import Signup from './pages/Signup'
import Login from './pages/Login'
import JWTest from './JWTest';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <div className="App">
      {/* <JWTest /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/projects' element={<ProjectList />} /> */}
        {/* this is a protected route */}
        <Route
          path='/projects'
          element={
            <ProtectedRoute redirectTo='/login'>
              <ProjectList />
            </ProtectedRoute>
          }
        />


        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/projects/edit/:id' element={<EditProject />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
