import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents';
import {Storage} from './components/Storage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/storage" element={<Storage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
