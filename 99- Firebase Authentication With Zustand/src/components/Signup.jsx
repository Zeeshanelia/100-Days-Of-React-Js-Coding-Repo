import React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../config/firebase-config"
import "animate.css"
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const createUser = async (values)=>{
    try {
      const {user} = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const userId = user.uid
      const payload = {
        fullname: values.fullname,
        city: values.city,
        createdAt: new Date()
      }
      await setDoc(
        doc(db, "users", userId),
        payload
      )
      message.success("User created successfully !")
      setTimeout(()=>{
        navigate("/login")
      }, 2000)
    }
    catch(err)
    {
      console.log(err)
      message.error("Failed to create user")
    }
  }

  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen overflow-hidden gap-8'>
      <Card className='!w-4/12 shadow-lg animate__animated animate__slideInUp' title={<h1 className='text-2xl font-bold'>Sign Up</h1>}>
          <Form layout='vertical' onFinish={createUser}>
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[{required: true}]}
              className='font-medium'
            >
              <Input
                size='large'
                placeholder='Enter your name here'
              />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[{required: true}]}
              className='font-medium'
            >
              <Input
                size='large'
                placeholder='City name ?'
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{required: true, type: 'email'}]}
              className='font-medium'
            >
              <Input
                size='large'
                placeholder='mail@gmai.com'
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true}]}
              className='font-medium'
            >
              <Input.Password
                size='large'
                placeholder='************'
              />
            </Form.Item>



            <Form.Item>
              <Button size='large' type='primary' htmlType='submit' className='!w-full'>Sign up</Button>
            </Form.Item>
          </Form>
      </Card>
    </div>
  )
}

export default Signup