import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './component/Login';
import SignUp from './component/SignUp';

import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <PrivateRoute path='/class' element={<Login />} />
          <PrivateRoute path='/instructor' element={<Login />} />
          <PrivateRoute path='/reserve' element={<Login />} />
          <PrivateRoute path='/pass' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
