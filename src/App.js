import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/LoginComponents'
import { SignUp } from './components/LoginComponents/SignUp'
import { ImageStorage } from './components/ImageStorage'
import { AudioStorage } from './components/AudioStorage'
import { Message } from './components/Message'
import { UpdateProfile } from './components/LoginComponents/UpdateProfile'
import { TestLayout } from './components/TestLayout'
import { Vocabulary } from './components/Vocabulary'
import { Grammar } from './components/Grammar'
import { Listening } from './components/Listening'
import { Reading } from './components/Reading'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/image" element={<ImageStorage />} />
                    <Route path="/audio" element={<AudioStorage />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/home" element={<TestLayout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/updateprofile" element={<UpdateProfile />} />
                    <Route path="/test/*" element={<TestLayout />} />
                    <Route path="/test/grammar" element={<Grammar />} />
                    <Route path="/test/vocabulary" element={<Vocabulary />} />
                    <Route path="/test/reading" element={<Reading />} />
                    <Route path="/test/listening" element={<Listening />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
