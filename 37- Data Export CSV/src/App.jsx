import "animate.css";
import { Input, Modal, Form, Button, Select, DatePicker, } from 'antd'
import { useState } from 'react';
import moment from "moment";
import { CSVLink } from "react-csv";

function App() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [form] = Form.useForm()

  const createRecord = (values) => {
    values.date = moment(values.date).toDate()
    setData([
      ...data,
      values
    ])
    handleClosed()
  }

  const handleClosed = () => {
    setOpen(false)
    form.resetFields()
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-400 to-purple-400 text-white flex flex-col">

        <div className="w-10/12 mx-auto py-2 ">

        
            <h1 className=' py-2 text-center text-2xl font-bold border mx-auto w-56'>  Form Data Export CSV  </h1>
         




          <div className="mt-3 bg-slate-600 h-16 flex justify-between items-center p-4">
            <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-600 p-1 rounded px-2 text-lg font-bold">New Record </button>
              <CSVLink data={data }>
            <button className="bg-green-400 hover:bg-green-500 p-1 rounded px-2 text-lg font-bold">Export Data</button>
             </CSVLink>
          </div>


          <div className="mt-3 rounder shadow-lg bg-white h-24 flex justify-between items-center p-4">
            <table className="w-full">
              <tr className="bg-rose-400 text-left text-xl">
                <th className="pl-2 py-2"> Customer Name </th>
                <th className=""> Cell NO  </th>
                <th className="">  Email   </th>
                <th className="">  Product </th>
                <th className=""> Ammount  </th>
                <th className="">  Status   </th>
                <th className=""> Date </th>
              </tr>


              {
                data.map((item, index) => (
                  <tr key={index} className="bg-white text-black text-left border-b border-b-gray-200 font-semibold">
                    <td className="pl-2 py-2"> {item.customerName} </td>
                    <td > {item.cellno} </td>
                    <td > {item.email} </td>
                    <td >  {item.product}</td>
                    <td >  {item.ammount} </td>
                    <td > {item.status}</td>
                    <td > {moment(item.date).format('DD MM YYYY , hh:mm A')} </td>
                  </tr>
                ))
              }
            </table>

          </div>
        </div>
        <Modal open={open} footer={null} onCancel={handleClosed}>
          <Form layout="vertical" onFinish={createRecord} form={form}>
            <Form.Item label="Customer Name" name="customerName" rules={[{ required: true }]}>
              <Input size="large" placeholder="enter customer name" />
            </Form.Item>

            <Form.Item label="Cell No" name="cellno" rules={[{ required: true }]}>
              <Input size="large" placeholder="enter customer cell no" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input size="large" placeholder="enter customer email" />
            </Form.Item>

            <Form.Item label="Product" name="product" rules={[{ required: true }]}>
              <Input size="large" placeholder="enter product name" />
            </Form.Item>

            <Form.Item label="Ammount" name="ammount" rules={[{ required: true }]}>
              <Input size="large" placeholder="enter ammount" />
            </Form.Item>

            <Form.Item label="Status" name="status" rules={[{ required: true }]}>
              <Select size="large" placeholder="enter customer name" >
                <Select.Option value="cold">Cold </Select.Option>
                <Select.Option value="hot"> Hot </Select.Option>
                <Select.Option value="close"> Close</Select.Option>

              </Select>
            </Form.Item>

            <Form.Item label="Date" name="date" rules={[{ required: true }]}>
              <DatePicker size="large" className="w-full" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary"> Submit </Button>
            </Form.Item>

          </Form>

        </Modal>
      </div>

    </>
  )
}

export default App


