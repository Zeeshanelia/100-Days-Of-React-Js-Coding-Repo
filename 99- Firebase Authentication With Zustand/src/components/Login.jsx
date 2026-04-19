import React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase-config"
import "animate.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const loginUser = async (values)=>{
     try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      navigate("/profile")
    }
    catch(err)
    {
      message.error("Invalid credential")
    }
  }

  return (
    <div className='bg-slate-500 flex items-center justify-center h-screen overflow-hidden gap-8'>
      <Card className='!w-4/12 shadow-lg animate__animated animate__slideInUp' title={<h1 className='text-2xl font-bold'>Login</h1>}>
          <Form layout='vertical' onFinish={loginUser}>

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
              <Button size='large' type='primary' htmlType='submit' className='!w-full'>Sign in</Button>
            </Form.Item>
          </Form>
      </Card>
    </div>
  )
}

export default Login