import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

import Login from './component/Login';
import SignUp from './component/SignUp';

import Header from './component/Header';
import Footer from './component/Footer';
import Class from './component/Class';
import Home from './component/Home';
import Logout from './component/Logout';
import EditClassForm from './component/EditClassForm';
import Instructor from './component/Instructor';
import Reserve from './component/Reserve';
import Pass from './component/Pass';
import Orientation from './component/Orientation'

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
        <Header/>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/editClass/:id' element={
            <PrivateRoute redirectTo='/'>
              <EditClassForm/>
            </PrivateRoute>
          }/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/edit/:id' element={<EditClassForm />} />
          <Route path='/orientation' element={
            <PrivateRoute redirectTo='/'>
              <Orientation />
            </PrivateRoute>
          }/>
          <Route path='/class' element={
            <PrivateRoute redirectTo='/'>
              <Class />
            </PrivateRoute>
          }/>
          <Route path='/instructor' element={
            <PrivateRoute redirectTo='/'>
              <Instructor />
            </PrivateRoute>
          }/>
          <Route path='/reserve' element={
            <PrivateRoute redirectTo='/'>
              <Reserve />
            </PrivateRoute>
          }/>
          <Route path='/pass' element={
            <PrivateRoute redirectTo='/'>
              <Pass />
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
