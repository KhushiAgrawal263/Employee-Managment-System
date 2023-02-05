import React from 'react'
import './Notifications.css'



const Notifications = (props) => {

    var unseenNotification = [
        'Your leave of 09-10-2023 is approved!',
        'Your leave of 09-10-2023 is Declined. ',
        'Say Hey, to new Employee Isha Bam.'
    ];
    
    var seenNotification = [
        'Say Hey, to new Employee Isha Bam.',
        '03-03-2023 will be Holi Holiday.'
    ];

  return (
    <div className='notifications' >
        <div className='notificationTriangle'></div>
        <div className='overallNotification'>
            <div className='crossNoti'>
                <img src="Image/crossNot.png" alt="" />
            </div>
            {
                    unseenNotification.map((unseen) => (
                        <div className='UnseenInnerDiv' >
                            <p> {unseen} </p>
                        </div>
                    ))
            }

            {
                seenNotification.map((seen) => (
                    <div className=' seenInnerDiv' >
                        <p> {seen} </p>
                    </div>
                ))
            }
            

        </div>
    </div>
  )
}

export default Notifications