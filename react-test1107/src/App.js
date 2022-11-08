import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Memo from './page/Memo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='memo' element={<Memo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
