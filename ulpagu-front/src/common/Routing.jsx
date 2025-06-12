import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Nosotros from './Nosotros.jsx';
import Instructions from './Instructions';
import Register from './Register';
import Login from './Login';
import PrivateRoute from '../components/PrivateRoute';


function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element = {<App/>}/>
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;