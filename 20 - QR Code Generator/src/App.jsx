import { useRef, useState } from 'react';
import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import { Modal, QRCode, Form, Input, Button } from 'antd';

function App() {

  const divRef = useRef(null);
  const [open, setOpen] = useState(false)
  const [logo, setLogo] = useState('')
  const [form] = Form.useForm()
  const [qrCode, setQrCode] = useState({
    value: "https://github.com/Zeeshanelia/100-Days-Of-React-Js-Coding-Repo",
    icon: "https://api.dicebear.com/7.x/adventurer/svg?seed=pY5p2R3jSP6v05SC-IHGM",
    bgColor: "white",
    color: "black"
  }
  )

  const downloading = () => {
    const div = divRef.current;
    const canvas = div.querySelector('canvas');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'qrcode.png';
    link.click();
    link.remove()
  }



  const generateQR = (values) => {
    values.bgColor = values.bgColor || "white"
    values.color = values.color || "black"

    setQrCode(prev => ({
      ...prev,
      ...values,
      icon: logo || prev.icon
    }))
    setOpen(false)
  }


  const logoChoose = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setLogo(url)
  }

  const handleClose = () => {
      setLogo('')
      setOpen(false)
      form.resetFields()
    }


  return (
    <>
      <div className="py-4 bg-gradient-to-b from-purple-300 via-gray-800 to-red-300 min-h-screen text-white ">

        <p onClick={() => setOpen(true)} className="text-xl font-bold text-gray-700  text-center">QR Code Generator</p>

        <div className=" sm:w-10/12 md:w-6/12 mx-auto min-h-[400px] bg-gray-100 flex flex-col items-center justify-center rounded-xl   mt-4">


          <div ref={divRef} className='transition-all duration-300 shadow-xl hover:scale-105 transition-transform duration-300'>
            <QRCode
              value={qrCode.value}
              size={300}
              bgColor={qrCode.bgColor}
              color={qrCode.color}
              icon={qrCode.icon} />
          </div>


          <div className="flex  items-center justify-center gap-4 mt-4 mb-4">
            <button onClick={downloading}
              type="button"
              className="hover:scale-105 transition-transform duration-300 mt-2 bg-blue-400 shadow-xl   rounded  w-40 appearance-none  cursor-pointer text-black flex  items-center justify-center gap-4 font-semibold ">
              <i className="ri-import-fill text-2xl "></i>
              Download
            </button>

            <button onClick={() => setOpen(true)}
              type="button"
              className="hover:scale-105 transition-transform duration-300 mt-2 bg-blue-400 shadow-xl   rounded  w-40 appearance-none  cursor-pointer text-black py-1 font-semibold ">

              Generate QR Code
            </button>
          </div>




          <Modal open={open} footer={null} onCancel={handleClose}>
            <h1>  Generate Your QR Code</h1>

            <Form onFinish={generateQR} form={form}>
              <Form.Item label="Url" name='value'
                rules={[{ required: true, type: 'url' }]}>
                <Input size='medium' placeholder='Enter' />
              </ Form.Item>



              <Form.Item label="BG Colour" name='bgColor'>
                <Input type="color" size='medium' />
              </ Form.Item>



              <Form.Item label="Logo">

                <Input onChange={logoChoose} type='file' accept='image/*' size='medium' />
              </ Form.Item>


              <Form.Item >
                <Button size='medium' type='primary' htmlType='submit'>
                  Create Code </Button>
              </ Form.Item>
            </Form>
          </Modal>


        </div>

      </div >
    </>
  );
}

export default App;