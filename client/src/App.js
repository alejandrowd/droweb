import './App.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/home/header/Header'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'
import Resume from './components/resume/Resume'
import ContactMe from './components/contactMe/ContactMe'

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <Home />
      <AboutMe />
      <Resume />
      <ContactMe />
    </div>
  )
}

export default App
