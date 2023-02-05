import React from 'react'
import './Document.css'

const Doc = () => {
  return (
    <div className='doc'>
        <div>
            <h4>Title of Document</h4>
            <input type="text" />
        </div>
        <div>
            <h4>Description of Document</h4>
            <textarea />
        </div>
        <div>
            <h4>Please your document</h4>
        </div>
        <div>
            <button className='btn btn-success'>Submit</button>
        </div>
    </div>
  )
}

export default Doc