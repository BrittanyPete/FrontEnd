import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

import Logout from './component/Logout';
import Login from './component/Login';
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
      <Class />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/orientation' element={
            <PrivateRoute redirectTo='/orientation'>
              <Orientation />
            </PrivateRoute>
          }/>
          <Route path='/class' element={
            <PrivateRoute redirectTo='/class'>
              <Class />
            </PrivateRoute>
          }/>
          <Route path='/instructor' element={
            <PrivateRoute redirectTo='/instructor'>
              <Instructor />
            </PrivateRoute>
          }/>
          <Route path='/reserve' element={
            <PrivateRoute redirectTo='/reserve'>
              <Reserve />
            </PrivateRoute>
          }/>
          <Route path='/pass' element={
            <PrivateRoute redirectTo='/pass'>
              <Pass />
            </PrivateRoute>
          }/>
          <Route path='/pass' element={
            <PrivateRoute redirectTo='/pass'>
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