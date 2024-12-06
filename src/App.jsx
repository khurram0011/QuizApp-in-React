import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import './index.css'
import Instructions from './Components/Instructions';
import Play from './Components/Play';
import Result from './Components/Result';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap Route inside Routes and use element prop */}
        {/* <Route path="/" element={<Nav name="QuizApp" />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/Play" element={<Play />} />

        
        <Route path="/Result" element={<Result />} />

        
      </Routes>
    </Router>
  );

}

export default App;
