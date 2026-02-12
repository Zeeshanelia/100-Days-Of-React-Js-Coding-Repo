import "animate.css";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import moment from "moment";
import { Modal, Form, Input, InputNumber, DatePicker, Button } from "antd";
import { useExpense } from './zustand/useExpense'
import { nanoid } from "nanoid";

function App() {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const { expenses, setExpense, deleteExpense } = useExpense()

  const createExpense = (values) => {
    values.date = moment(values.date).toDate()
    values.date = nanoid()
    setExpense(values)
    handleClosed()
    console.log(values)
  }

  const handleClosed = () => {
    setOpen(false)
    form.resetFields()
  }
  return (
    <>
      <div className="min-h-screen ">

        <div className='min-h-screen bg-gray-200 py-5 bg-gradient-to-b from-slate-600 to-yellow-300  flex flex-col animate__zoomIn animate__animated'>
          <div className='w-10/12 mx-auto bg-white rounded p-3 '>

            <div className='flex flex-col '>
              <div className='flex justify-between'>
                <h1 className='text-2xl font-bold '>Expence Tracker </h1>
                <button onClick={() => setOpen(true)} className='px-2 bg-blue-400 hover:bg-blue-500 font-bold rounded py-2'> Add New </button>
              </div>
            </div>

            <input type="text" className='w-full rounded mt-2 mx-auto  border p-2'
              placeholder='Search these expenses' />


            <table className="w-full mt-2 border-collapse">

              {/* Table Header */}
              <thead>
                <tr className="bg-indigo-300 text-left">
                  <th className="py-1 px-2">Title</th>
                  <th className="py-1 px-2">Description</th>
                  <th className="py-1 px-2">Amount</th>
                  <th className="py-1 px-2">Date</th>
                  <th className="py-1 px-2">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>

                {
                  expenses.map((item, index) => (
                    <tr key={index} className="bg-gray-200">

                      <td className="py-2 px-1">{item.title}</td>
                      <td className="py-2 px-1">{item.description}</td>
                      <td className="py-2 px-1">{item.amount}</td>
                      <td className="py-2 px-1">{moment(item.Date).format('DD MM YYYY , hh:mm A')}</td>
                      <td className="py-2 px-1">

                        <div className="flex gap-2 ">
                          <button className="h-8 w-16 bg-green-400 rounded-md text-white">
                            Edit
                          </button>

                          <button onClick={() => deleteExpense(item.id)} className="h-8 w-16 bg-red-400 rounded-md text-white">
                            Delete
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                }

              </tbody>

            </table>
            <div className="flex justify-end items-center ">
              <p className="p-2 rounded border font-bold mt-2  px-10 bg-pink-100"> Total Expense RS :
                {(expenses.reduce((sum, item) => sum + item.amount, 0)).toLocaleString()}
              </p>
            </div>
          </div>

          {/* <ToastContainer /> */}
        </div>
        <Modal open={open} footer={null} onCancel={handleClosed} >
          <Form layout="vertical" onFinish={createExpense} form={form}>

            <Form.Item label='Expense Title' name="title" rules={[{ required: true }]}>
              <Input size="large" placeholder="expense name" />
            </Form.Item>

            <Form.Item label='Description' name="description" rules={[{ required: true }]}>
              <Input.TextArea size="large" placeholder="description" />
            </Form.Item>

            <Form.Item label='Amount' name="amount" rules={[{ required: true }]}>
              <InputNumber size="large" placeholder="amount in number" className="!w-full" />
            </Form.Item>

            <Form.Item label='Date' name="date" rules={[{ required: true }]}>
              <DatePicker size="large" placeholder="select date" className="!w-full" />
            </Form.Item>
            <Form.Item  >
              <Button htmlType="submit" type="primary">
                submit
              </Button>
            </Form.Item>


          </Form>
        </Modal>

      </div>
    </>
  )
}

export default App