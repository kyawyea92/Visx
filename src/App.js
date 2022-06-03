import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import BirthDayList from './birthday/BirthDayList';
import BirthDayDetails from './birthday/BirthDayDetails';
import BirthDayInfo from './birthday/CareateBirthDayInfo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<BirthDayList/>}/>
        <Route path='/birthDayDetail' element = {<BirthDayDetails/>}/>
        <Route path='/create-birth-info' element ={<BirthDayInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
