import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            {/* Implement admin layout here */}
            Admin Layout

            <Outlet />
        </div>
    )
}

export default AdminLayout
