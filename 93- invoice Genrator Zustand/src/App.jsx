import React, { useState } from 'react'
import "animate.css"
import { MinusIcon, Plus, Printer } from 'lucide-react'
import { Button, DatePicker, Divider, Drawer, Form, Input, InputNumber, Select, Space, Tooltip } from 'antd'
import moment from 'moment'

const App = () => {
  const [open, setOpen] = useState(false)
  const [invoice, setInvoice] = useState(null)
  const [form] = Form.useForm()

  const handleClose = () => {
    setOpen(false)
    form.resetFields()
  }

  const formSchema = [
    { label: "Invoice no", name: "invoiceNo", required: true },
    { label: "Date", name: "date", required: true },
    { label: "Company name", name: "companyName", required: true },
    { label: "Company website", name: "companyWebsite", required: true },
    { label: "Company email", name: "companyEmail", required: true },
    { label: "Company address", name: "companyAddress", required: true },
    { label: "Company state", name: "companyState", required: true },
    { label: "Company country", name: "companyCountry", required: true },
    { label: "Company pincode", name: "companyPincode", required: true },
    { label: "Company NTN", name: "companyGst", required: true },
    { label: "Customer name", name: "customerName", required: true },
    { label: "Customer company name", name: "customerCompanyName", required: true },
    { label: "Customer email", name: "customerEmail", required: true },
    { label: "Customer address", name: "customerAddress", required: true },
    { label: "Customer state", name: "customerState", required: true },
    { label: "Customer country", name: "customerCountry", required: true },
    { label: "Customer pincode", name: "customerPincode", required: true },
    {
      label: "Choose payment method",
      name: "paymentMethod",
      required: true,
      options: [
        { label: "Bank", value: "bank" },
        { label: "UPI", value: "upi" }
      ]
    },
    { label: "Transaction id", name: "transactionId", required: true },
    { label: "Due date", name: "dueDate", required: true },
    { label: "GST rate (%)", name: "gstRate", required: true }
  ]

  const generateInvoice = (values) => {
    values.date = moment(values.date).format('DD MMM YYYY')
    values.dueDate = moment(values.dueDate).format('DD MMM YYYY')
    values.products = values.products.map((product) => ({
      ...product,
      amount: product.qty * product.rate
    }))
    values.subtotal = values.products.reduce((sum, item) => sum + item.amount, 0)
    values.tax = (values.subtotal * values.gstRate) / 100
    values.total = values.subtotal + values.tax
    setInvoice(values)
    handleClose()
  }

  return (
    <div className='bg-gray-100 min-h-screen print:min-h-0 py-6 print:bg-white print:py-0'>

      <div className='mx-auto bg-white w-[210mm] min-h-[297mm] p-[15mm] shadow-lg print:shadow-none print:m-0'>

        {/* ── Header ── */}
        <div className='flex justify-between items-start border-b-2 border-emerald-700 pb-6'>
          <div>
            <h1 className='text-2xl font-bold tracking-widest text-emerald-800'>INVOICE</h1>
            <p className='text-sm text-gray-500 mt-1'>Invoice #INV-{invoice?.invoiceNo || '0001'}</p>
            <p className='text-sm text-gray-500'>Date: {invoice?.date || '01 Jan 2026'}</p>
          </div>

          <div className='text-right'>
            <h2 className='text-lg font-semibold text-emerald-800'>{invoice?.companyName || 'ABC Solutions Pvt Ltd'}</h2>
            <p className='text-sm text-gray-500'>{invoice?.companyWebsite || 'www.example.pk'}</p>
            <p className='text-sm text-gray-500'>{invoice?.companyAddress || '123 Business Street'}</p>
            <p className='text-sm text-gray-500'>
              {invoice?.companyState || 'Islamabad'}, {invoice?.companyCountry || 'Pakistan'} – {invoice?.companyPincode || '44000'}
            </p>
            <p className='text-sm text-gray-500'>NTN: {invoice?.companyGst || '0000000-0'}</p>
          </div>
        </div>

        {/* ── Bill To / Payment ── */}
        <div className='grid grid-cols-2 gap-8 mt-8'>
          <div>
            <h3 className='text-xs font-semibold tracking-widest text-emerald-700 mb-2'>BILL TO</h3>
            <p className='text-sm font-medium text-gray-800'>{invoice?.customerName || 'Ahmed Raza'}</p>
            <p className='text-sm text-gray-500'>{invoice?.customerCompanyName || 'XYZ Enterprises'}</p>
            <p className='text-sm text-gray-500'>{invoice?.customerAddress || '456 Client Road'}</p>
            <p className='text-sm text-gray-500'>
              {invoice?.customerState || 'Karachi'}, {invoice?.customerCountry || 'Pakistan'} – {invoice?.customerPincode || '75500'}
            </p>
            <p className='text-sm text-gray-500'>Email: {invoice?.customerEmail || 'client@example.pk'}</p>
          </div>

          <div className='text-right'>
            <h3 className='text-xs font-semibold tracking-widest text-emerald-700 mb-2'>PAYMENT DETAILS</h3>
            <p className='text-sm text-gray-500'>Payment Method: {invoice?.paymentMethod || 'Bank'} Transfer</p>
            <p className='text-sm text-gray-500'>Reference ID: {invoice?.transactionId || 'PAY123456'}</p>
            <p className='text-sm text-gray-500'>Due Date: {invoice?.dueDate || '10 Jan 2026'}</p>
          </div>
        </div>

        {/* ── Products Table ── */}
        <div className='mt-10'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-emerald-800 text-white text-left text-sm'>
                <th className='p-3'>Description</th>
                <th className='p-3 text-right'>Qty</th>
                <th className='p-3 text-right'>Rate</th>
                <th className='p-3 text-right'>Amount</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {invoice?.products?.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}>
                  <td className='p-3 border border-gray-200'>{product.item}</td>
                  <td className='p-3 border border-gray-200 text-right'>{product.qty}</td>
                  <td className='p-3 border border-gray-200 text-right'>Rs. {product.rate.toLocaleString()}</td>
                  <td className='p-3 border border-gray-200 text-right'>Rs. {product.amount.toLocaleString()}</td>
                </tr>
              ))}
              <tr className='bg-emerald-50'>
                <td className='p-3 border border-gray-200 text-emerald-800 font-medium'>
                  GST ({invoice?.gstRate || 0}%)
                </td>
                <td className='p-3 border border-gray-200 text-right'>—</td>
                <td className='p-3 border border-gray-200 text-right'>—</td>
                <td className='p-3 border border-gray-200 text-right'>
                  Rs. {Number(invoice?.tax || 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Totals ── */}
        <div className='flex justify-end mt-6'>
          <div className='w-1/3'>
            <div className='flex justify-between text-sm mb-2'>
              <span className='text-gray-500'>Subtotal</span>
              <span className='text-gray-800'>Rs. {Number(invoice?.subtotal || 0).toLocaleString()}</span>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <span className='text-gray-500'>Tax</span>
              <span className='text-gray-800'>Rs. {Number(invoice?.tax || 0).toLocaleString()}</span>
            </div>
            <div className='flex justify-between text-base font-semibold border-t-2 border-emerald-700 pt-2 text-emerald-800'>
              <span>Total</span>
              <span>Rs. {Number(invoice?.total || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className='mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500'>
          <p>Thank you for your business.</p>
          <p className='mt-1'>This is a computer-generated invoice.</p>
        </div>

      </div>

      {/* ── Sidebar Buttons ── */}
      <div className='print:hidden fixed -translate-y-1/2 top-1/2 left-0 bg-white rounded-r-lg p-4 flex flex-col gap-4 shadow-lg'>
        <Tooltip title="Create a new invoice">
          <button
            onClick={() => setOpen(true)}
            className='bg-emerald-700 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-95'
          >
            <Plus />
          </button>
        </Tooltip>
        <button
          onClick={() => window.print()}
          className='bg-emerald-700 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-95'
        >
          <Printer />
        </button>
      </div>

      {/* ── Drawer Form ── */}
      <Drawer open={open} onClose={handleClose} title="Create a new invoice" width={720}>
        <Form form={form} layout='vertical' onFinish={generateInvoice} className='grid grid-cols-2 gap-x-6'>
          {formSchema.map((item, index) => {
            if (item.name === 'gstRate') {
              return (
                <Form.Item
                  key={index}
                  label={<span className='font-medium text-base'>{item.label}</span>}
                  name={item.name}
                  rules={[{ required: item.required }]}
                >
                  <InputNumber size="large" className="!w-full" min={0} max={100} />
                </Form.Item>
              )
            }
            if (item.name === 'date' || item.name === 'dueDate') {
              return (
                <Form.Item
                  key={index}
                  label={<span className='font-medium text-base'>{item.label}</span>}
                  name={item.name}
                  rules={[{ required: item.required }]}
                >
                  <DatePicker size="large" className="!w-full" />
                </Form.Item>
              )
            }
            if (item.name === 'paymentMethod') {
              return (
                <Form.Item
                  key={index}
                  label={<span className='font-medium text-base'>{item.label}</span>}
                  name={item.name}
                  rules={[{ required: item.required }]}
                >
                  <Select size='large' className='!w-full' options={item.options} placeholder="Choose payment method" />
                </Form.Item>
              )
            }
            return (
              <Form.Item
                key={index}
                label={<span className='font-medium text-base'>{item.label}</span>}
                name={item.name}
                rules={[{ required: item.required }]}
              >
                <Input size='large' />
              </Form.Item>
            )
          })}

          <Divider className='col-span-2'>Product Details</Divider>

          <Form.List name="products">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline" className='col-span-2'>
                    <Form.Item
                      {...restField}
                      name={[name, 'item']}
                      rules={[{ required: true, message: 'Item is missing' }]}
                    >
                      <Input placeholder="Item description" size='large' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'qty']}
                      rules={[{ required: true, message: 'Quantity is missing' }]}
                    >
                      <InputNumber placeholder="Qty" size='large' className='!w-full' min={1} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'rate']}
                      rules={[{ required: true, message: 'Rate is missing' }]}
                    >
                      <InputNumber placeholder="Rate (Rs.)" className='!w-full' size='large' min={0} />
                    </Form.Item>
                    <MinusIcon
                      onClick={() => remove(name)}
                      className='cursor-pointer text-red-500 hover:text-red-700'
                    />
                  </Space>
                ))}
                <Form.Item className='col-span-2'>
                  <Button type="dashed" onClick={() => add()} block icon={<Plus />} size='large'>
                    Add product
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item className='col-span-2'>
            <Button
              size='large'
              htmlType='submit'
              type="primary"
              style={{ backgroundColor: '#065f46', borderColor: '#065f46' }}
            >
              Generate Invoice
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default App