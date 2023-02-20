import React from 'react'
import './Notifications.css'


const Notifications = (props) => {
    var unseenNotification = props.props.unseen
    console.log(props.props.unseen,"jhgiyfgyf");
    const handleClose=(e)=>{
        e.preventDefault();
        props.props.handleCross(true);
    }
  return (
    <div className='notifications' >
        <div className='notificationTriangle'></div>
        
        <div className='overallNotification'>
            <div className='crossNoti' onClick={handleClose}>
                <img src="Image/crossNot.png" alt="" />
            </div>
            {
                unseenNotification.length>0 ?  unseenNotification.map((unseen) => (
                    <div className='UnseenInnerDiv' >
                        <p> {unseen.message} </p>
                    </div>
                )) :"No new Notification"
            }
        </div>
    </div>
  )
}

export default Notifications