import React, { useState } from 'react'
import '@ant-design/v5-patch-for-react-19';
import 'animate.css';
import { Button, Card, Divider, Form, Input, message, Select, Skeleton } from 'antd';
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Plus, Trash2 } from 'lucide-react';
import { nanoid } from 'nanoid';

const App = () => {
  const [payloadFields, setPayloadFields] = useState([])
  const [headerFields, setHeaderFields] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")
  const [status, setStatus] = useState(0)

  const sendRequest = async (values)=>{
    const payload = {}
    const headers = {}

    for(let item of payloadFields)
    {
      payload[item.key] = item.value
    }

    for(let item of headerFields)
    {
      headers[item.key] = item.value
    }

    try {
      setLoading(true)
      const response = await axios({
        method: values.method,
        url: values.url,
        data: payload,
        headers: headers
      })
      setStatus(response.status)
      setResult(JSON.stringify(response.data, null, 2))
    }
    catch(err)
    {
      setStatus(err?.status || 500)
      message.error(err.message)
    }
    finally {
      setLoading(false)
    }
  }

  const addField = (fieldName)=>{
    if(fieldName === "payload")
      setPayloadFields([
        ...payloadFields,
        {
          id: nanoid(),
          key: '',
          value: ''
        }
      ])

    if(fieldName === "header")
      setHeaderFields([
        ...headerFields,
        {
          id: nanoid(),
          key: '',
          value: ''
        }
      ])
  }

  const removeField = (fieldName, id)=>{
    if(fieldName === "header")
    {
      const filteredField = headerFields.filter(item => item.id !== id)
      setHeaderFields(filteredField)
    }

    if(fieldName === "payload")
    {
      const filteredField = payloadFields.filter(item => item.id !== id)
      setPayloadFields(filteredField)
    }
  }

  const handleKeyValue = (fieldName, type, value, id)=>{
    if(fieldName === "payload")
    {
      setPayloadFields((payloads)=>payloads.map((item)=>{
        if(item.id === id)
        {
          return {
            ...item,
            [type]: value
          }
        }
        else {
          return item
        }
      }))
    }

    if(fieldName === "header")
    {
      setHeaderFields((headers)=>headers.map((item)=>{
        if(item.id === id)
        {
          return {
            ...item,
            [type]: value
          }
        }
        else {
          return item
        }
      }))
    }
  }

  const HttpMethod = ()=>{
    return (
      <Form.Item name="method" noStyle rules={[{required: true}]}>
        <Select className='w-[100px]' size='large'>
          <Select.Option value="GET">Get</Select.Option>
          <Select.Option value="POST">Post</Select.Option>
          <Select.Option value="PUT">Put</Select.Option>
          <Select.Option value="PATCH">Patch</Select.Option>
          <Select.Option value="DELETE">Delete</Select.Option>
        </Select>
      </Form.Item>
    )
  }
  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className='w-9/12 mx-auto py-16 flex flex-col gap-8'>
        <Card>
          <Card.Meta
            title={<h1 className='text-4xl font-bold'>Http Client Test</h1>}
            description={<p className='text-lg'>api testing tool for react developer</p>}
          />
          <Divider />
          <Form onFinish={sendRequest} initialValues={{
            method: "GET"
          }}>
            <Form.Item
              name="url"
              rules={[{required: true, type: 'url'}]}
            >
              <Input
                size='large'
                placeholder='https://api.testing.com'
                addonBefore={<HttpMethod />}
              />
            </Form.Item>

            <Form.Item>
              <Button loading={loading} size='large' type='primary' htmlType='submit'>Send Request</Button>
            </Form.Item>
          </Form>
        </Card>

        <div className='grid grid-cols-2 gap-8'>
          <Card title="Payload">
            <div className='flex flex-col gap-6'>
              {
                payloadFields.map((item, index)=>(
                  <div className='flex gap-4' key={index}>
                    <Input
                      size='large'
                      placeholder='Key'
                      onChange={(e)=>handleKeyValue("payload", "key", e.target.value, item.id)}
                    />

                    <Input
                      size='large'
                      placeholder='Value'
                      onChange={(e)=>handleKeyValue("payload", "value", e.target.value, item.id)}
                    />

                    <Button
                      type='primary'
                      danger
                      className='!px-4'
                      size='large'
                      icon={<Trash2 className='w-4 h-4' />}
                      onClick={()=>removeField("payload", item.id)}
                    />
                  </div>
                ))
              }
            </div>

            <Button onClick={()=>addField("payload")} type='primary' size='large' icon={<Plus className='w-4 h-4' />} className='!w-full !mt-6'>
              Add field
            </Button>
          </Card>

          <Card title="Headers">
            <div className='flex flex-col gap-6'>
              {
                headerFields.map((item, index)=>(
                  <div className='flex gap-4' key={index}>
                    <Input
                      size='large'
                      placeholder='Key'
                      onChange={(e)=>handleKeyValue("header", "key", e.target.value, item.id)}
                    />

                    <Input
                      size='large'
                      placeholder='Value'
                      onChange={(e)=>handleKeyValue("header", "value", e.target.value, item.id)}
                    />

                    <Button
                      type='primary'
                      danger
                      className='!px-4'
                      size='large'
                      icon={<Trash2 className='w-4 h-4' />}
                      onClick={()=>removeField("header", item.id)}
                    />
                  </div>
                ))
              }
            </div>
            <Button onClick={()=>addField("header")} type='primary' size='large' icon={<Plus className='w-4 h-4' />} className='!w-full !mt-6'>
              Add field
            </Button>
          </Card>
        </div>


        <Card title="Response" extra={status}>
          <div>
              <SyntaxHighlighter language='json' style={dark}>
                {result}
              </SyntaxHighlighter>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
