import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
