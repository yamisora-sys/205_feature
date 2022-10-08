import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/LoginComponents'
import { SignUp } from './components/LoginComponents/SignUp'
import { ImageStorage } from './components/ImageStorage'
import { AudioStorage } from './components/AudioStorage'
import { Message } from './components/Message'
import { UpdateProfile } from './components/LoginComponents/UpdateProfile'
import { TestLayout } from './components/TestLayout'
import { Grammar, Vocabulary, Reading } from './components/Test'
import { Listening } from './components/Listening'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/image" element={<ImageStorage />} />
                    <Route path="/audio" element={<AudioStorage />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/Home" element={<TestLayout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/updateprofile" element={<UpdateProfile />} />
                    <Route path="/Test/*" element={<TestLayout />} />
                    <Route path="/Test/Grammar" element={<Grammar />} />
                    <Route path="/Test/Vocabulary" element={<Vocabulary />} />
                    <Route path="/Test/Reading" element={<Reading />} />
                    <Route path="/Test/Listening" element={<Listening />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
