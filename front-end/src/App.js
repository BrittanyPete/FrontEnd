import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

import Login from './component/Login';
import SignUp from './component/SignUp';
import Class from './component/Class';
import Instructor from './component/Instructor';
import Reserve from './component/Reserve';
import Pass from './component/Pass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
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
          <Route path='/pass' elment={
            <PrivateRoute redirectTo='/pass'>
              <Pass />
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
