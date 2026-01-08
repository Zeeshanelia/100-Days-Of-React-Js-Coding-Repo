import { useState } from 'react';
import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import { Modal, Form, Input, Button } from 'antd';

function App() {
  const [passwormodal, setPasswordModal] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const unlockedContactForm = (values) => {
    console.log('Password:', values);
  };

  const addContactForm = (values) => {
    console.log('New Contact:', values);
    setContactOpen(false);
  };

  return (
    <>
      <div className="py-4 bg-gradient-to-l from-red-300 via-pink-800 to-yellow-300 min-h-screen">

        <p className="text-xl font-bold text-gray-700  border mx-auto w-96 bg-gradient-to-l from-red-300 via-pink-800 to-yellow-300 text-center rounded-xl"> PassWord Generator </p>

         {/* Add Contact Button  */}
        <Button
          onClick={() => setContactOpen(true)}
          className="fixed ml-20 top-[3rem] hover:scale-105 px-4 transition-transform duration-300 text-black font-semibold border rounded hover:bg-blue-300">   Add Contact </Button> 

        <div className="sm:w-11/12 md:w-11/12 mx-auto min-h-[405px] bg-gray-50 flex justify-between rounded-xl text-slate-500">

          <table className="w-10/12 mx-auto text-lg font-bold h-20 p-8 mt-14">
            <thead>
              <tr className="shadow-xl text-slate-700 bg-indigo-300">
                <th>Serial No</th>
                <th>Person</th>
                <th>Cell Phone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-gray-500 text-center text-md font-semibold">
                <td>1</td>
                <td>Zeeshan</td>
                <td>*********</td>
                <td>
                  <button
                    onClick={() => setPasswordModal(true)}
                    className="hover:scale-105 transition-transform duration-300 text-black font-semibold"
                  >
                    <i className="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Password Modal */}
        <Modal
          open={passwormodal}
          footer={null}
          title="Unblock Contact"
          onCancel={() => setPasswordModal(false)}
        >
          <Form onFinish={unlockedContactForm}>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Input.Password size="large" placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* Add Contact Modal */}
        <Modal
          open={contactOpen}
          footer={null}
          title="Add Contact"
          onCancel={() => setContactOpen(false)}
        >
          <Form onFinish={addContactForm}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input size="large" placeholder="Enter name" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Phone number is required' }]}
            >
              <Input size="large" placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Contact
              </Button>
            </Form.Item>
          </Form>
        </Modal>

      </div>
    </>
  );
}

export default App;
