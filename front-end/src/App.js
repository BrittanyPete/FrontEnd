import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

import Home from './component/Home';
import Logout from './component/Logout';
import Login from './component/Login';
import EditClassForm from './component/EditClassForm';
import SignUp from './component/SignUp';
import Class from './component/Class';
import Instructor from './component/Instructor';
import Reserve from './component/Reserve';
import Pass from './component/Pass';
import Orientation from './component/Orientation'

import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/editClass/:id' element={
            <PrivateRoute redirectTo='/'>
              <EditClassForm/>
            </PrivateRoute>
          }/>
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
      <Footer/>
    </div>
  );
};

export default App;