import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents/SignIn';
import { SignUp } from './components/LoginComponents/SignUp';
import { SignOut } from './components/LoginComponents/SignOut';
import {ImageStorage} from './components/ImageStorage';
import {AudioStorage} from './components/AudioStorage';
import {Message} from './components/Message';
import { addCourse } from './components/CourseComponents/AddCourse';
import { UpdateProfile } from './components/LoginComponents/UpdateProfile';
import {Nav} from './components/Nav';
import {ProtectedRoute} from './components/ProtectedRoute';
import {app, auth} from './components/Firebase';

function App() {

  const userId = auth.currentUser?.uid;

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route element={<ProtectedRoute user={userId} />}></Route>
        <Route path="/image" element={<ImageStorage/>}/>
        <Route path="/audio" element={<AudioStorage/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/Home" element={<Nav/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/addcourse" element={<addCourse/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
