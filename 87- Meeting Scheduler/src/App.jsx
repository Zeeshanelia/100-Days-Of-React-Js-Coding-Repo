import React from 'react'
import moment from 'moment-timezone'
import "animate.css"
import { Button, DatePicker, Form, Input } from 'antd'
import { ArrowRight } from 'lucide-react'

const App = () => {
  const scheduleMeeting = (values)=>{
    const title = encodeURIComponent(values.title)
    const description = encodeURIComponent(values.description)
    const startsAt = moment.tz(values.startsAt.toDate(), "Asia/Kolkata").format("YYYYMMDDTHHmmss")
    const endsAt = moment.tz(values.endsAt.toDate(), "Asia/Kolkata").format("YYYYMMDDTHHmmss")
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startsAt}/${endsAt}&details=${description}&ctz=Asia/Kolkata&sf=true&output=xml`;
    window.location.href = url
  }

  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <div className='bg-white rounded-4xl shadow-lg w-6/12 p-8 animate__animated animate__fadeIn'>
        <h1 className='text-4xl font-bold mb-8'>🗓️ Meeting Scheduler</h1>
        <Form onFinish={scheduleMeeting}>
          <Form.Item
            className='font-medium'
            label="Meeting title"
            rules={[{required: true}]}
            name="title"
          >
            <Input
              size='large'
              placeholder='Product update'
            />
          </Form.Item>

          <Form.Item
            className='font-medium'
            label="Description"
            name="description"
            rules={[{required: true}]}
          >
            <Input.TextArea
              size='large'
              placeholder='Description goes here'
              rows={5}
            />
          </Form.Item>

          <Form.Item
            className='font-medium'
            label="Starts At"
            rules={[{required: true}]}
            name="startsAt"
          >
            <DatePicker
              showTime
              size='large'
              placeholder='Choose date'
              className='!w-full'
            />
          </Form.Item>

          <Form.Item
            className='font-medium'
            label="Ends At"
            rules={[{required: true}]}
            name="endsAt"
          >
            <DatePicker
              showTime
              size='large'
              placeholder='Choose date'
              className='!w-full'
            />
          </Form.Item>
          <Form.Item>
            <Button icon={<ArrowRight className='w-4 h-4' />} size='large' type='primary' className='!w-full' htmlType='submit'>Schedule now</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App