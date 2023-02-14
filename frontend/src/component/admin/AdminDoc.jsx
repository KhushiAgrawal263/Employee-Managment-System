import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import './AdminDoc.css'

const AdminDoc = () => {
  return (
    <>
        <Sidebar />
        <NavBar />
        <div  className='adminDoc'>
        <div className='adminDocBg'>
        <table class="table table-striped levaeTable">
                <thead>
                    <tr>
                    <th scope='col'>S.No.</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Document Status</th>
                    <th scope='col'>Document Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <th scope="row">45678</th>
                        <td>Isha Bam</td>
                        <td> <img src="https://img.icons8.com/color/48/null/hourglass.png"/> </td>
                        <td> <Link to='/documentDetails' className='btn btn-success'>Get Details</Link> </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <th scope="row">45678</th>
                        <td>Isha Bam</td>
                        <td><img src="https://img.icons8.com/color/48/null/approval--v1.png"/></td>
                        <td> <Link to='/documentDetails' className='btn btn-success'>Get Details</Link> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </>
  )
}

export default AdminDoc