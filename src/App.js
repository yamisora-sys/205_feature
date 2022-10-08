import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents';
import {ImageStorage} from './components/ImageStorage';
import {AudioStorage} from './components/AudioStorage';
import { Message} from './components/Message';
import {Nav} from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/image" element={<ImageStorage/>}/>
        <Route path="/audio" element={<AudioStorage/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/Home" element={<Nav/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
