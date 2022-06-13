import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './routes/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes> 
    <Route path="/" element={ <Home/>} />
    {/* <Route path="/todos" element={ <Home/>} /> */}

    </Routes>
     
    </BrowserRouter>
    
   
    </div>
  );
}

export default App;
