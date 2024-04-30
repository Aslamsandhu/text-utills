import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import Alerts from './Components/Alerts';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      color: 'white',
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled", "success");
      document.title = 'Text-Utills Dark';
  }else {
    setMode('light');
    color: 'black',
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode Enabled", "success");
    document.title = 'Text-Utills Light';
  }
}
  return ( 
    <>
    <Router>
      <Navbar title= "Text-Utills" mode= {mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
      <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter text to analyse." mode= {mode}/>}></Route>
          </Routes>
      </div>    
    </Router>
</>
  );
}

export default App;
