import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
