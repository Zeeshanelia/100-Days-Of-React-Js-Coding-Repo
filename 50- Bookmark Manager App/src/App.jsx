import { Divider, Input, Modal, Form, Button } from 'antd'
import { useState } from 'react'
import { useBookmark } from './zustand/useBookmark'
import { nanoid } from 'nanoid'
import moment from 'moment'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [open, setOpen] = useState(false)
  const { bookmarks, setBookmark } = useBookmark()
  const [form] = Form.useForm()

 const createBookmark = (values) => {
  values.id = nanoid()
  values.date = new Date()
  console.log(values)

  setBookmark(values)
  setOpen(false)
  form.resetFields()
}

  const handleClosed = () => {
  setOpen(false)
  form.resetFields()
}



  return (
    <>
      <div className='min-h-screen bg-slate-500 py-5'>
        <div className='grid grid-cols-5 gap-4 bg-white w-10/12 p-6 rounded-lg mx-auto'>
          <h1 onClick={() => setOpen(true)} className='flex flex-col text-2xl bg-green-500  py-6 rounded border hover:bg-gray-100 rounded  duration-200 text-center'><i className="ri-sticky-note-add-line"></i> Add Bookmark  </h1>

          { Array.isArray(bookmarks) && bookmarks.map((item, index) => (
            <button  key={index} className=''>
              <div className='flex flex-col items-center gap-2 justify-center py-6 rounded border hover:bg-gray-100 rounded  duration-200 '>
                <label className="text-slate-800 text-lg font-semibold "> {item.bookmarkName}</label>
                <label className="text-gray-400 ">{moment(item.date).format('DD MM YYYY , hh:mm A')}
                </label>
                <a href={item.link} target='_blank' className='flex text-purple-400  items-center gap-2'> <i className="ri-ie-line text-xl"></i> Browse link </a>
              </div>
            </button>
          ))}
        </div>


        <section className='ml-[300px] py-12'>

          <Modal open={open} footer={null} onCancel={handleClosed} title="Create new bookmark">
            {/* <h1 className='text-2xl'> Create new bookmark </h1> */}

            <Divider />
            <Form layout='vertical' onFinish={createBookmark} form={form}>
              <Form.Item label="Bookmark Name" name="bookmarkName" rules={[{ required: true }]}>
                <Input placeholder='file name' />
              </Form.Item>

              <Form.Item label="Link" name="link" rules={[{ required: true, type: 'url' }]}>
                <Input.TextArea size='large' placeholder='link' />
              </Form.Item>

              <Form.Item >
                <Button htmlType="submit" type="primary" size="large" block>
                  Create
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </section>

      </div>
    </>
  )
}

export default App
