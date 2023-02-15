import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
//import Auth from "../../../../Stage_07/src/configs/auth";

import { AppRoutes} from './app.routes'
import { AuthRoutes} from './auth.routes'

export function Routes(){
const { user } = useAuth()

    return(
        <BrowserRouter>
            {user ? <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>}
        </BrowserRouter>
    )
}