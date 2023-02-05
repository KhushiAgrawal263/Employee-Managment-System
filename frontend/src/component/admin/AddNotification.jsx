import React from 'react'
import './AddNotification.css'

const AddNotification = () => {
  return (
    <div className='add-notification'>
        <input type="date" />
        <select>
            <option value="0">Select--</option>
            <option value="1">Holiday</option>
            <option value="2">Saturday Status</option>
        </select>
        <input type="text" />
        <button>SEND</button>
    </div>
  )
}

export default AddNotification