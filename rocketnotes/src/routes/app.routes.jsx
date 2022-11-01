import { Routes, Route } from 'react-router-dom'

import { New } from '../Pages/New'
import { Home } from '../Pages/Home'
import { App } from '../Pages/App'
import { Profile } from '../Pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/new' element={<New></New>}></Route>
            <Route path='/app/:id' element={<App></App>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
    )
}