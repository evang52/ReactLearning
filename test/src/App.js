import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 
'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <>
       <Router>
       <Navbar />
       <Routes>
       <Route path='/' exact />
       </Routes>
        
       </Router>
       </>
        
      </header>
    </div>
  );
}

export default App;
