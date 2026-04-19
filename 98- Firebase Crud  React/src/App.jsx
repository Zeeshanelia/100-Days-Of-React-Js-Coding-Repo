import { Button, Divider, Form, Input, InputNumber, message, Modal, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import "animate.css"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './config/firbase-config'
import moment from 'moment'
import { Edit2, Trash2 } from 'lucide-react'

const User = collection(db, "users")

const App = () => {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const [users, setUsers] = useState([])
  const [updateCount, setUpdateCount] = useState(0)
  const [editId, setEditId] = useState(null)

  const handleClose = ()=>{
    setOpen(false)
    form.resetFields()
    setEditId(null)
  }

  const createRecord = async (values)=>{
    try {
      values.createdAt = new Date()
      await addDoc(User, values)
      setUpdateCount(updateCount+1)
      message.success("Data stored")
      handleClose()
    }
    catch(err)
    {
      message.error(err.message)
    }
  }

  const fetchRecord = async ()=>{
    try {
      const res = await getDocs(User)
      const data = res.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      setUsers(data)
    }
    catch(err)
    {
      message.error(err.message)
    }
  }

  const deleteRecord = async (id)=>{
    try {
      const docRef = doc(db, "users", id)
      await deleteDoc(docRef)
      message.success("Data deleted !")
      setUpdateCount(updateCount+1)
    }
    catch(err)
    {
      message.error(err.message)
    }
  }

  const editRecord = (values)=>{
    setOpen(true)
    form.setFieldsValue(values)
    setEditId(values.id)
  }

  const saveRecord = async (values)=>{
    try {
      values.createdAt = new Date()
      const docRef = doc(db, "users", editId)
      await updateDoc(docRef, values)
      message.success("Data updated")
      setUpdateCount(updateCount+1)
      handleClose()
    }
    catch(err)
    {
      message.error(err.message)
    }
  }

  useEffect(()=>{
    fetchRecord()
  }, [updateCount])

  const columns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: 'ID'
    },
    {
      key: 'fullname',
      dataIndex: 'fullname',
      title: 'Fullname'
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email'
    },
    {
      key: 'mobile',
      dataIndex: 'mobile',
      title: 'Mobile'
    },
    {
      key: 'createdAt',
      title: 'CreatedAt',
      render: (values)=>moment(values.createdAt.toDate()).format('DD MMM YYYY, hh:mm A')
    },
    {
      key: 'actions',
      render: (values)=>(
        <div className='flex items-center gap-3'>
          <Button onClick={()=>editRecord(values)} icon={<Edit2 className='w-4 h-4' />} color='primary' variant='outlined' />
          <Button onClick={()=>deleteRecord(values.id)} icon={<Trash2 className='w-4 h-4' />} color='pink' variant='outlined' />
        </div>
      )
    }
  ]

  return (
    <div className='bg-purple-200 min-h-screen py-12'>
      <div className='animate__animated animate__fadeIn bg-white rounded-xl p-8 shadow-lg w-8/12 mx-auto space-y-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Firebase Crud Operation</h1>
          <Button size='large' type='primary' onClick={()=>setOpen(true)}>Add New Record</Button>
        </div>
        <Table
          columns={columns}
          dataSource={users}
          scroll={{x: 'max-content'}}
        />
        <Modal open={open} footer={null} onCancel={handleClose}>
          <h1 className='text-lg font-medium mb-3'>New Record</h1>
          <Form form={form} onFinish={editId ? saveRecord : createRecord}>
            <Form.Item
              name="fullname"
              rules={[{required: true}]}
            >
              <Input
                size='large'
                placeholder='Fullname'
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{required: true, type:'email'}]}
            >
              <Input
                size='large'
                placeholder='Email'
              />
            </Form.Item>

            <Form.Item
              name="mobile"
              rules={[{required: true, type: 'number'}]}
            >
              <InputNumber
                className='!w-full'
                size='large'
                placeholder='Mobile'
              />
            </Form.Item>
            <Form.Item>
              {
                editId ?
                <Button size='large' type='primary' danger htmlType='submit'>Save</Button>
                :
                <Button size='large' type='primary' htmlType='submit'>Submit</Button>
              }
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
}

export default App