import React from 'react'
import './PrevNotifications.css'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import AdminAllNotification from './admin/AdminAllNotification'
import EmployeeAllNotification from './pages/EmployeeAllNotification'

const PrevNotifications = () => {
  const user = JSON.parse(localStorage.getItem("EMSuser"));
  const role = user && user.role;

  return (
    <>
        <NavBar />
        <Sidebar />
        <div className='prevNotification'>
            <h4>Notifications</h4>
            <div className='prev-notification-div'> 
                {
                  role == 'admin' ? <AdminAllNotification /> :<EmployeeAllNotification />
                }
            </div>
        </div>
    </>
  )
}

export default PrevNotifications