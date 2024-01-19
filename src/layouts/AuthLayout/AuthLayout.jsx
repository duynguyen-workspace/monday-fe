import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div>
            {/* Use grid layout to split the screen in half */}
            Authentication Layout

            <Outlet />
            
        </div> 
    )
}

export default AuthLayout
