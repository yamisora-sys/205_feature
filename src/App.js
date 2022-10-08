import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/LoginComponents'
import { SignUp } from './components/LoginComponents/SignUp'
import { ImageStorage } from './components/ImageStorage'
import { AudioStorage } from './components/AudioStorage'
import { Message } from './components/Message'
import { UpdateProfile } from './components/LoginComponents/UpdateProfile'
import { Nav } from './components/Nav'
import { Test, Grammar, Vocabulary, Listening, Reading } from './pages/Test'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/image" element={<ImageStorage />} />
                    <Route path="/audio" element={<AudioStorage />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/Home" element={<Nav />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/updateprofile" element={<UpdateProfile />} />
                    <Route
                        path="/Test/*"
                        element={
                            <>
                                <Nav />
                                <Test />
                            </>
                        }
                    />
                    <Route
                        path="/Test/Grammar"
                        element={
                            <>
                                <Nav />
                                <Test />
                                <Grammar />
                            </>
                        }
                    />
                    <Route
                        path="/Test/Vocabulary"
                        element={
                            <>
                                <Nav />
                                <Test />
                                <Vocabulary />
                            </>
                        }
                    />
                    <Route
                        path="/Test/Reading"
                        element={
                            <>
                                <Nav />
                                <Test />
                                <Reading />
                            </>
                        }
                    />
                    <Route
                        path="/Test/Listening"
                        element={
                            <>
                                <Nav />
                                <Test />
                                <Listening />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
