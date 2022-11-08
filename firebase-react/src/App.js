import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './page/Home';
import User from './page/User';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/User' element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
