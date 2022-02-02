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
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/edit/:id' element={<EditClassForm />} />
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
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
