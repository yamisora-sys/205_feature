import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/LoginComponents/SignIn';
import { SignUp } from './components/LoginComponents/SignUp';
import { SignOut } from './components/LoginComponents/SignOut';
import {ImageStorage} from './components/ImageStorage';
import {AudioStorage} from './components/AudioStorage';
import {Message} from './components/Message';
import { AddCourse } from './components/CourseComponents/AddCourse';
import { ListCourse } from './components/CourseComponents/CourseList';
import { UpdateProfile } from './components/LoginComponents/UpdateProfile';
import { UserCourse } from "./components/CourseComponents/UserCourse";
import {Nav} from './components/Nav';
import { TestLayout } from './components/TestLayout'
import { Vocabulary } from './components/Vocabulary'
import { Grammar } from './components/Grammar'
import { Listening } from './components/Listening'
import { Reading } from './components/Reading'
import { HomeScreen } from './HomeComponents/HomeScreen';
import {ProtectedRoute} from './components/ProtectedRoute';
import {app, auth} from './components/Firebase';
import {useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { ListLesson } from './components/Teacher/ListLesson';
export default function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const Name = user.displayName;
      console.log(Name);
      setUser(Name);
    } else {
      console.log("User is signed out");
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route element={<ProtectedRoute user={user} />}></Route>
        <Route path="/image" element={<ImageStorage/>}/>
        <Route path="/audio" element={<AudioStorage/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/Home" element={<Nav/>}/>
        <Route path="/homepage" element={<HomeScreen/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/test/*" element={<TestLayout />} />
        <Route path="/test/grammar" element={<Grammar />} />
        <Route path="/test/vocabulary" element={<Vocabulary />} />
        <Route path="/test/reading" element={<Reading />} />
        <Route path="/test/listening" element={<Listening />} />
        <Route path="/addcourse" element={<AddCourse/>}/>
        <Route path="/listcourse" element={<ListCourse/>}/>
        <Route path="/listlesson/:courseName" element={<ListLesson/>}/>
        <Route path="/listlesson" element={<ListLesson/>}/>
        <Route path="/usercourse" element={<UserCourse/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
