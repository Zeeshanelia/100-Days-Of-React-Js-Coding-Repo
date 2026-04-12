import React, { useState } from 'react'
import "animate.css"
import { Button, Card, Form, Input, InputNumber, Modal, Select, Tag } from 'antd'
import { Plus } from 'lucide-react'
import { useStoreRoom } from './zustand/useStoreRoom'
import { nanoid } from 'nanoid'

const App = () => {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const { stores, setStore, deleteStore, updateStore } = useStoreRoom()
  const [editId, setEditId] = useState(null)
  const [search, setSearch] = useState('')

  //  avoid mutating form values object directly
  const createItem = (values) => {
    const newItem = { ...values, id: nanoid() }
    setStore(newItem)
    handleClose()
  }

  const handleClose = () => {
    setOpen(false)
    form.resetFields()
    setEditId(null)
  }

  const editStore = (item) => {
    setEditId(item.id)
    setOpen(true)
    form.setFieldsValue(item)
  }

  const saveItem = (values) => {
    updateStore(editId, values)
    handleClose()
  }

  //  guard against undefined title or keywords
  const filtered = stores.filter((item) => {
    const title = item.title?.toLowerCase() || ''
    const keywords = item.keywords || []
    return (
      title.includes(search) ||
      keywords.some((keyword) => keyword.toLowerCase().includes(search))
    )
  })

  return (
    <div className='bg-slate-800 min-h-screen py-8'>
      <div className='w-10/12 bg-white rounded-4xl shadow-lg p-8 mx-auto space-y-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-blue-600'> Store Room App</h1>
          <div className='!space-x-4'>
            <Input
              size='large'
              placeholder='Search this store'
              className='!w-lg'
              onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
            />
            <Button
              onClick={() => setOpen(true)}
              size='large'
              variant="solid"
              color="blue"
              icon={<Plus className='w-4 h-4' />}
            >
              Add items
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-8'>
          {filtered.map((item) => (
            <Card
              key={item.id}
              hoverable
              className='shadow-lg'
              cover={
                //  proper image fallback + onError handler
                <img
                  src={item?.image || 'https://placehold.co/160x160?text=No+Image'}
                  onError={(e) => { e.target.src = 'https://placehold.co/160x160?text=No+Image' }}
                  className='!w-40 !h-40 !object-cover mx-auto'
                />
              }
            >
              <Card.Meta
                className='capitalize'
                title={item.title}
                description={`${item.qnt} ${item.unitOfMeasure}`}
              />
              <div className='flex mt-4 flex-wrap gap-3'>
                {(item.keywords || []).map((k, kIndex) => (
                  <Tag key={kIndex} className='!capitalize'>{k}</Tag>
                ))}
              </div>

              <div className='mt-4 space-x-3'>
                <Button variant="solid" color="green" onClick={() => editStore(item)}>Edit</Button>
                <Button variant="solid" color="pink" onClick={() => deleteStore(item.id)}>Delete</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/*  modal title reflects add vs edit mode */}
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        title={editId ? "Edit Item" : "Add Item"}
      >
        <Form onFinish={editId ? saveItem : createItem} form={form}>
          <Form.Item
            name="title"
            rules={[{ required: true }]}
          >
            <Input
              size='large'
              placeholder='Title'
            />
          </Form.Item>

          <Form.Item
            name="qnt"
            rules={[{ required: true, type: 'number' }]}
          >
            <InputNumber
              size='large'
              placeholder='Quantity'
              className='!w-full'
            />
          </Form.Item>

          <Form.Item
            name="unitOfMeasure"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Choose value"
              size='large'
              options={[
                { label: "PC", value: "pc" },
                { label: "KG", value: "kg" },
                { label: "LTR", value: "ltr" },
                { label: "GM", value: "gm" }
              ]}
            />
          </Form.Item>

          <Form.Item
            name="keywords"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Enter keywords"
              size='large'
              mode="tags"
            />
          </Form.Item>

          <Form.Item
            name="image"
            rules={[{ type: 'url' }]}
          >
            <Input
              size='large'
              placeholder='Image URL'
            />
          </Form.Item>

          <Form.Item>
            {editId ? (
              <Button htmlType='submit' type='primary' danger size='large'>Save</Button>
            ) : (
              <Button htmlType='submit' type='primary' size='large'>Submit</Button>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App