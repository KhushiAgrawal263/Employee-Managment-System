import React from 'react'
import { useState } from 'react'
import '../PrevNotifications.css'

const EmployeeAllNotification = ({props}) => {
    const[not, setNot] = useState('All')
    const count = props.count;
    const seenNotifi = props.notifi;
    console.log(props.notifi);
    let uniqueAll=[];
    props.notifi.map((item) => {
        var findItem = uniqueAll.find((x) => x._id === item._id);
        if (!findItem) uniqueAll.push(item);
      });
    let LeaveUnique=[];
    let weekend=[];
    let NewUserUnique=[];
    uniqueAll.map((leave)=>{
        if(leave.type=='Leave Declined' || leave.type=='Leave Approved'){
            LeaveUnique.push(leave);
        }else if(leave.type=='Holiday' || leave.type=='Saturday Status'){
            weekend.push(leave);
        }else if(leave.type=='New employee'){
            NewUserUnique.push(leave);
        }
    })
    

    return (
      <div className='adminAllNotification'>
          <div className='adminNotificationHead'>
              <div className={not == 'All' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('All')}>All({count})</div>
              <div className={not == 'Leave' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Leave')}>Employee Leave</div>
              <div className={not == 'Event' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('Event')}>Events</div>
              <div className={not == 'welcome' ? "alladmin allAdminNoti" : "alladmin"} onClick={() => setNot('welcome')}>New Employee</div>
          </div>

        {
            not == 'All' &&
            <>
                <div className='adminNotifcationContent'>
                    {
                        uniqueAll.length>0 ? uniqueAll.map((eachnotifi)=>(
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{eachnotifi.message}</div>
                                <div className='notification-date'>{eachnotifi.date}</div>
                            </div>
                        )) : <p className='no-notifi'>No Notifications </p>
                    }
                </div>
            </>
        }

        {
            not == 'Leave' &&
            <>
                <div className='adminNotifcationContent'>
                    {
                        // console.log(LeaveUnique)
                        LeaveUnique.length>0 ? LeaveUnique.map((eachnotifi)=>(
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{eachnotifi.message}</div>
                                <div className='notification-date'>{eachnotifi.date}</div>
                            </div>
                        )): <p className='no-notifi'>No Notifications </p>
                    }
                </div>
            </>
        }

        {
            not == 'Event' &&
            <>
                <div className='adminNotifcationContent'>
                    {
                        weekend.length>0 ? weekend.map((eachnotifi)=>(
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{eachnotifi.holidayDate}, {eachnotifi.message}</div>
                                <div className='notification-date'>{eachnotifi.date}</div>
                            </div>
                        )): <p className='no-notifi'>No Notifications </p>
                    }
                </div>
            </>
        }

        {
            not == 'welcome' &&
            <>
                <div className='adminNotifcationContent'>
                    {
                        NewUserUnique.length>0 ? NewUserUnique.map((eachnotifi)=>(
                            <div className='unseen-adminNotifcationContent'>
                                <div className='notificatoion-text'>{eachnotifi.message}</div>
                                <div className='notification-date'>{eachnotifi.date}</div>
                            </div>
                        )): <p className='no-notifi'>No Notifications </p>
                    }
                </div>
            </>
        }


{/* 
          <div className='adminNotifcationContent'>
              <div className='unseen-adminNotifcationContent'>
                  <div className='notificatoion-text'>Isha Bam applied for leave.</div>
                  <div className='notification-date'>03-02-2023</div>
              </div>
  
              <div className='seen-adminNotifcationContent'>
                  <div className='notificatoion-text'>Isha Bam applied for leave.</div>
                  <div className='notification-date'>03-02-2023</div>
              </div>
  
          </div> */}
      </div>
    )
}

export default EmployeeAllNotification