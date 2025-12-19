import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Landing from './Pages/Landing';
import Messages from './Pages/Messages';
import Donations from './Pages/Donations';
import EventsPage from './Pages/EventsPage';
import ContactPage from './Pages/ContactPage';

function App() {


  return (

    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index={true} element={<Landing/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/donations' element={<Donations/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/contact-us' element={<ContactPage/>}/>
        </Route>
    </Routes>
    
    </BrowserRouter>
</div>
  )
}

export default App

