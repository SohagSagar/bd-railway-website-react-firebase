import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contract from './Components/Home/Contract/Contract';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import Register from './Components/Home/Register/Register';
import VerifyTicket from './Components/Home/VerifyTicket/VerifyTicket';
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
