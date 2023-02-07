import React from 'react'
import { useState } from 'react'
import '../PrevNotifications.css'

const AdminAllNotification = ({props}) => {
    const[not, setNot] = useState('All')
    const count = props.count;
    const seenNotifi = props.notifi;
    let uniqueAll=[];
    props.notifi.map((item) => {
        var findItem = uniqueAll.find((x) => x._id === item._id);
        if (!findItem) uniqueAll.push(item);
      });
    let LeaveUnique=[];
    let Birthday=[];
    uniqueAll.map((leave)=>{
        if(leave.type=='Leave Applied'){
            LeaveUnique.push(leave);
        }else if(leave.type=='Birthday'){
            Birthday.push(leave);
        }
    })

  return (
    <div className='adminAllNotification'>
        <div className='adminNotificationHead'>
            <div className={not == 'All' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('All')}>All</div>
            <div className={not == 'Leave' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Leave')}>Employee Leave</div>
            <div className={not == 'Birthday' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Birthday')}>Events</div>
        </div>

        {
            not=='All' &&
            <>
                {
                    uniqueAll.length>0 ? uniqueAll.map((leave)=>(
                        <div className='adminNotifcationContent'>
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{leave.message}</div>
                                <div className='notification-date'>{leave.date}</div>
                            </div>
                        </div>
                    )) : <p className='no-notifi'>No Notifications </p>
                }
            </>
        }

        {
            not=='Leave' &&
            <>
                {
                    // console.log(LeaveUnique)
                    LeaveUnique.length>0 ? LeaveUnique.map((leave)=>(
                        <div className='adminNotifcationContent'>
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{leave.message}</div>
                                <div className='notification-date'>{leave.date}</div>
                            </div>
                        </div>
                    )) : <p className='no-notifi'>No Notifications </p>
                }
            </>
        }

        {
            not=='Birthday' &&
            <>
               {
                    Birthday.length>0 ? Birthday.map((leave)=>(
                        <div className='adminNotifcationContent'>
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{leave.message}</div>
                                <div className='notification-date'>{leave.date}</div>
                            </div>
                        </div>
                    )) : <p className='no-notifi'>No Notifications </p>
                }
            </>
        }
        
    </div>
  )
}

export default AdminAllNotification