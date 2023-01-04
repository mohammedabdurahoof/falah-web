import './App.css';
import Singin from './Components/Singin'
import Singup from './Components/Singup';
import Home from './Components/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import History from './Components/History';
import Account from './Components/Account';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Singin />} />
        <Route path='/register' element={<Singup />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
