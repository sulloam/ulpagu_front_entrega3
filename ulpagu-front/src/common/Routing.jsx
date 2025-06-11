import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Nosotros from './Nosotros.jsx';
import Instructions from './Instructions';


function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element = {<App/>}/>
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/instructions" element={<Instructions />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;