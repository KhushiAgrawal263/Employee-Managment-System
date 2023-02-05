import React from 'react'
import { useState } from 'react'
import '../PrevNotifications.css'

const AdminAllNotification = () => {
    const[not, setNot] = useState('All')

  return (
    <div className='adminAllNotification'>
        <div className='adminNotificationHead'>
            <div className={not == 'All' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('All')}>All</div>
            <div className={not == 'Leave' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Leave')}>Employee Leave</div>
            <div className={not == 'Event' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Event')}>Events</div>
        </div>
        <div className='adminNotifcationContent'>
            <div className='unseen-adminNotifcationContent'>
                <div className='notificatoion-text'>Isha Bam applied for leave.</div>
                <div className='notification-date'>03-02-2023</div>
            </div>

            <div className='seen-adminNotifcationContent'>
                <div className='notificatoion-text'>Isha Bam applied for leave.</div>
                <div className='notification-date'>03-02-2023</div>
            </div>

        </div>
    </div>
  )
}

export default AdminAllNotification