import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import Contract from './Components/Contract/Contract'
import Register from './Components/Home/Register/Register';
import VerifyTicket from './Components/VerifyTicket/VerifyTicket';
import Header from './Components/SharedSection/Header/Header';


function App() {
  return (
    <div className='app' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/verify-ticket' element={<VerifyTicket/>}></Route>
        <Route path='/contract' element={<Contract/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
