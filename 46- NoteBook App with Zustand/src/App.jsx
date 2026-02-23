import { ToastContainer, toast } from 'react-toastify'
import { Divider, Input, Modal, Form, Button } from 'antd'
import { useState } from 'react'
import { useNote } from './zustand/useNote'
import { nanoid } from 'nanoid'
import moment from 'moment'
import 'remixicon/fonts/remixicon.css'


function App() {
  const [open, setOpen] = useState(false)
  const [read, setRaed] = useState(null)
  const [editId, setEditId] = useState(null)

  const { notes, setNotes , deleteNote , updateNote} = useNote()
  const [form] = Form.useForm()

  const handleClosed = () => {
    setOpen(false)
    form.resetFields()
  }

  const createNote = (valeus) => {
    valeus.id = nanoid()
    valeus.date = new Date()
    setNotes(valeus)
    handleClosed()
  }

  const RemoveNote = (id ) => {
    deleteNote(id)
    setRaed(null)
  }

  const editNote = (item) =>{
    setOpen(true)
    form.setFieldValue(item)
  }

  return (
    <>
      <div className='min-h-screen bg-gray-200 py-5'>
        <aside className='overflow-hidden space-y-2 bg-red-200 fixed top-0 left-0 w-[300px] h-full px-4 py-2'>

          <div className='bg-white w-full p-3 rounded-lg'>
            {notes.map((item, index) => (

              <button onClick={()=>setRaed(item)} key={index} className='flex items-start gap-1 w-full hover:bg-gray-100 rounded hover:p-2 duration-200'>

                <div className='flex flex-col '>
                  <label className="text-slate-800 text-lg font-semibold "> {item.filename}</label>
                  <label className="text-gray-400 ">{moment(item.date).format('DD MM YYYY , mm:hh A')}
                  </label>
                </div>
              </button>

            ))}
          </div>

          <button onClick={() => setOpen(true)} className='w-full h-7 rounded bg-green-300 hover:bg-green-400'> New File </button>
        </aside>


        <section className='ml-[300px] py-12'>
          {
            read ?
              <div className=' mx-auto bg-white  rounded-lg'>
                <div className='px-5 py-2 border-b border-gray-400 border-dashed flex justify-between items-center'>
                  <div>
                    <h1 className='text-xl font-medium capitalize'>  {read.filename} </h1>
                    <label htmlFor="" className='text-gray-400 '> {moment(read.date).format('DD MM YYYY , mm:hh A')} </label>
                  </div>

                  <div className='space-x-3'>
                    <button onClick={()=>editNote(read)} className='w-12 h-7 rounded bg-green-200 hover:bg-green-400'> edit </button>
                    <button onClick={()=>RemoveNote(read.id)} className='w-12 h-7 rounded bg-green-200 hover:bg-green-400'> delete</button>
                  </div>
                </div>
                <div className='p-6'>
                  <p className='text-gray-400'>{read.content}</p>
                </div>
              </div>

              :
              <div className='w-11/12-full bg-white flex flex-col justify-center items-center p-12 rounded-lg'>
                <i className="ri-file-scan-line text-5xl text-purple-400 hover:text-purple-600 duration-200"></i>
                <p>Choose a file</p>
              </div>

          }


          <Modal open={open} footer={null} width="50%"
            onCancel={handleClosed} >
            <h1 className='text-2xl'>Create New File </h1>
            <Divider />
            <Form layout='vertical' onFinish={createNote} form={form}>
              <Form.Item label="Filename" name="filename" rules={[{ required: true }]}>
                <Input placeholder='file name' />
              </Form.Item>

              <Form.Item label="Content" name="content" rules={[{ required: true }]}>
                <Input.TextArea size='large' placeholder='description' rows={5} />
              </Form.Item>

              <Form.Item >
                <Button htmlType="submit" type="primary" size="large" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>

        </section>
        {/* <ToastContainer /> */}
      </div>
    </>
  )
}

export default App
