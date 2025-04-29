import './App.css'

import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from './layouts/RootLayout';
import Landing from './Pages/Landing';

function App() {


  return (

    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index={true} element={<Landing/>}/>

        </Route>
    </Routes>
    
    </BrowserRouter>
</div>
  )
}

export default App
