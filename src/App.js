import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/users' element={ <UserList /> } />
          <Route path='/user/:userId' element={ <User /> } />
          <Route path='/newUser' element={ <NewUser /> } />
          <Route path='/products' element={ <ProductList /> } />
          <Route path='/products/:productId' element={ <Product /> } />
          <Route path='/newproduct' element={ <User /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
