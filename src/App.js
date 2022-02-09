import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/users' element={ <UserList /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
