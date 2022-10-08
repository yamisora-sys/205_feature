import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents';
import {ImageStorage} from './components/ImageStorage';
import {AudioStorage} from './components/AudioStorage';
import {Nav} from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/Home" element={<Nav/>}/>
        <Route path="/Image" element={<ImageStorage/>}/>
        <Route path="/Audio" element={<AudioStorage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
