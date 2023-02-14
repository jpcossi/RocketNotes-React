import { BrowserRouter } from "react-router-dom";
//import Auth from "../../../../Stage_07/src/configs/auth";

import { AppRoutes} from './app.routes'
import { AuthRoutes} from './auth.routes'

export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes></AuthRoutes>
        </BrowserRouter>
    )
}