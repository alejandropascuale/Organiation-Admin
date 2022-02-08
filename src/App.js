import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className='others'>
          others pages
        </div>
      </div>
    </div>
  );
}

export default App;
