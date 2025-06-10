import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Nosotros from './Nosotros.jsx';

function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element = {<App/>}/>
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;