import React, { useEffect, useState } from 'react'
import './PrevNotifications.css'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import AdminAllNotification from './admin/AdminAllNotification'
import EmployeeAllNotification from './pages/EmployeeAllNotification'

const PrevNotifications = () => {
  const user = JSON.parse(localStorage.getItem("EMSuser"));
  const role = user && user.role;
  const id = user && user.id;

  const [seenUserNotifi,setSeenUserNotifi] = useState([]);
  const [count,setCount] = useState();

  useEffect(()=>{
    const fetchSeennotifications =async ()=>{
      const res = await fetch(`http://localhost:8000/user/get/user/notifi/${id}`);
      const data = await res.json();
      console.log(data.notifications);
      let n =0;
      data.notifications.map((eachnotifi)=>{
        if(eachnotifi.status == 'seen'){
            n++;
            setSeenUserNotifi(arr=>[...arr,eachnotifi]);
        }
      })
      setCount(n);
    }
    fetchSeennotifications();
  },[])

  return (
    <>
        <NavBar />
        <Sidebar />
        <div className='prevNotification'>
          <div className='prevNotificationBg'>
            <h4>Notifications</h4>
            <div className='prev-notification-div'> 
                {
                  role == 'admin' ? <AdminAllNotification props={{notifi:seenUserNotifi,count:count}}/> :<EmployeeAllNotification props={{notifi:seenUserNotifi,count:count}} />
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default PrevNotifications