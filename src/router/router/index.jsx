import {Route, Routes} from "react-router-dom"

import { Home } from "../../pages/home"
import { Dashboard } from "../../pages/dashboard"
import {Agendamento} from "../../pages/agendamento/agendamento.jsx";
import {Quadra1} from "../../pages/Quadra1/Quadra1.jsx";
import {Quadra2} from "../../pages/Quadra2/Quadra2.jsx";
import {Quadra3} from "../../pages/Quadra3/Quadra2.jsx";


export const  RouterMain = () =>{

    return(
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/agendamento" element={<Agendamento/>}/>
            <Route path="/quadra_1" element={<Quadra1/>}/>
            <Route path="/quadra_2" element={<Quadra2/>}/>
            <Route path="/quadra_3" element={<Quadra3/>}/>
        </Routes>
    )
}
 