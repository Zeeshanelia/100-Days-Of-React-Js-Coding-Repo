import { Button, message } from 'antd'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../config/firebase-config'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../zustand/useAuth'
import moment from 'moment'

const Profile = () => {
    const navigate = useNavigate()
    const {user, setUser} = useAuth()

    const removeSession = async ()=>{
        try {
            await signOut(auth)
            setUser(null)
            navigate("/login")
        }
        catch(err)
        {
            message.error("Failed to logout")
        }
    }

  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
        <div className='bg-white rounded-2xl p-8 shadow-lg w-6/12 animate__animated animate__fadeIn'>
            <h1 className='text-4xl font-bold mb-4'>Hi User !</h1>
            <p className='text-lg'>
                <b>Fullname : </b> {user?.fullname}
            </p>

            <p className='text-lg'>
                <b>Email : </b> {user?.email}
            </p>

            <p className='text-lg'>
                <b>City : </b> {user?.city}
            </p>

            <p className='text-lg mb-5'>
                <b>Created at : </b> {user && moment(user.createdAt).format('DD MMM YYYY, hh:mm A')}
            </p>

            <Button type='primary' danger size='large' onClick={removeSession}>Logout</Button>
        </div>
    </div>
  )
}

export default Profile