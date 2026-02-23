import "animate.css";
import { Badge, Card, Tag, Select, Modal, Input, Form, Button, message } from "antd";
import { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'

function App() {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(new Date().toLocaleDateString());
  const [form] = Form.useForm();
  const [tasks, setTasks] = useState({
    highest: [],
    medium: [],
    lowest: []
  });

  // Sample initial tasks
  const initialTasks = {
    highest: [
      { id: 1, title: "Complete project report", description: "Finish the quarterly project report and submit", status: "pending" },
      { id: 2, title: "Client meeting", description: "Prepare for important client presentation", status: "pending" }
    ],
    medium: [
      { id: 3, title: "Team sync", description: "Weekly team synchronization meeting", status: "inProgress" },
      { id: 4, title: "Code review", description: "Review pull requests from team members", status: "pending" }
    ],
    lowest: [
      { id: 5, title: "Update documentation", description: "Update project documentation", status: "completed" },
      { id: 6, title: "Organize files", description: "Clean up and organize project files", status: "pending" }
    ]
  };

  // Initialize tasks on component mount
  useEffect(() => {
    setTasks(initialTasks);
    
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
     
    return () => {
      clearInterval(interval);
    };
  }, []);

  const createTask = (values) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.discription,
      status: "pending",
      priority: values.periorty
    };

    // Add task to the appropriate priority array
    setTasks(prevTasks => ({
      ...prevTasks,
      [values.periorty]: [...prevTasks[values.periorty], newTask]
    }));

    message.success('Task created successfully!');
    form.resetFields();
    setOpen(false);
  };

  const handleClose = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleStatusChange = (taskId, priority, newStatus) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [priority]: prevTasks[priority].map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    }));
  };

  const handleDeleteTask = (taskId, priority) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [priority]: prevTasks[priority].filter(task => task.id !== taskId)
    }));
    message.info('Task deleted');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'blue';
      case 'inProgress': return 'orange';
      case 'completed': return 'green';
      default: return 'default';
    }
  };

  const renderTaskCard = (task, priority) => (
    <div key={task.id} className="mb-4 p-3 rounded shadow">
      <Card hoverable>
        <Card.Meta
          title={task.title}
          description={task.description}
        />
        
        <div className="flex justify-between mt-2">
          <div className="flex gap-3 mt-2">
            <Tag color={getStatusColor(task.status)}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </Tag>
            <Tag 
              className="!bg-red-400 cursor-pointer" 
              onClick={() => handleDeleteTask(task.id, priority)}
            >
              Delete
            </Tag>
          </div>
          <div>
            <Select 
              size="small" 
              placeholder="Change Status"
              value={task.status}
              onChange={(value) => handleStatusChange(task.id, priority, value)}
            >
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="inProgress">In Progress</Select.Option>
              <Select.Option value="completed">Completed</Select.Option>
            </Select>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <>
      <div className="h-screen overflow-hidden bg-gradient-to-r from-black/55 to-blue-300 text-white">
        <nav className="w-full bg-white h-8 fixed top-0 left-0 border flex justify-between items-center bg-yellow-100">
          <div className="flex">
            <p className="ml-1 border px-2 rounded-xl bg-zinc-900 text-purple-800 text-xl font-bold">P</p>
            <p className="text-xl font-bold text-purple-800">laner</p>
          </div>
          <h1 className="mr-1 text-xl font-bold text-purple-800">{timer}</h1>
        </nav>

        <section className="fixed top-[30px] left-0 w-full overflow-auto h-[calc(100%-96px)] grid grid-cols-3 gap-8 p-5">
          {/* Highest Priority Column */}
          <div className="h-full">
            <Badge.Ribbon text="HIGHEST" className="!bg-pink-500 font-bold">
              <div className="h-full overflow-y-auto bg-white rounded">
                <div className="min-h-[1000px] bg-gradient-to-b from-blue-100 to-purple-100 p-5">
                  <button 
                    onClick={() => setOpen(true)} 
                    className="flex gap-1 text-lg py-1 px-1 bg-indigo-400 hover:bg-indigo-500 font-semibold hover:scale-110 transform duration-400 shadow-lg mb-4"
                  >
                    <i className="ri-folder-add-line text-xl"></i>
                    Add Task
                  </button>
                  
                  {tasks.highest.map(task => renderTaskCard(task, 'highest'))}
                </div>
              </div>
            </Badge.Ribbon>
          </div>

          {/* Medium Priority Column */}
          <div className="h-full">
            <Badge.Ribbon text="MEDIUM" className="!bg-pink-500 font-bold">
              <div className="h-full overflow-y-auto bg-white rounded">
                <div className="min-h-[1000px] bg-gradient-to-b from-blue-100 to-purple-100 p-5">
                  <button 
                    onClick={() => setOpen(true)} 
                    className="flex gap-1 text-lg py-1 px-1 bg-indigo-400 hover:bg-indigo-500 font-semibold hover:scale-110 transform duration-400 shadow-lg mb-4"
                  >
                    <i className="ri-folder-add-line text-xl"></i>
                    Add Task
                  </button>
                  
                  {tasks.medium.map(task => renderTaskCard(task, 'medium'))}
                </div>
              </div>
            </Badge.Ribbon>
          </div>

          {/* Lowest Priority Column */}
          <div className="h-full">
            <Badge.Ribbon text="LOWEST" className="!bg-pink-500 font-bold">
              <div className="h-full overflow-y-auto bg-white rounded">
                <div className="min-h-[1000px] bg-gradient-to-b from-blue-100 to-purple-100 p-5">
                  <button 
                    onClick={() => setOpen(true)} 
                    className="flex gap-1 text-lg py-1 px-1 bg-indigo-400 hover:bg-indigo-500 font-semibold hover:scale-110 transform duration-400 shadow-lg mb-4"
                  >
                    <i className="ri-folder-add-line text-xl"></i>
                    Add Task
                  </button>
                  
                  {tasks.lowest.map(task => renderTaskCard(task, 'lowest'))}
                </div>
              </div>
            </Badge.Ribbon>
          </div>
        </section>

        <footer className="w-full bg-white h-8 fixed bottom-0 left-0 border flex justify-between items-center bg-yellow-100">
          <div className="w-full text-center text-purple-800 font-semibold">
            Total Tasks: {tasks.highest.length + tasks.medium.length + tasks.lowest.length}
          </div>
        </footer>

        {/* Modal for creating new task */}
        <Modal 
          open={open} 
          maskClosable={false} 
          onCancel={handleClose} 
          footer={null} 
          title="New Task"
        >
          <Form 
            form={form} 
            onFinish={createTask}
            layout="vertical"
          >
            <Form.Item
              name="title" 
              label="Task Title"
              rules={[{ required: true, message: 'Please enter task title' }]}
            >
              <Input.TextArea placeholder="Enter task name" rows={2} />
            </Form.Item>

            <Form.Item
              name="discription" 
              label="Description"
              rules={[{ required: true, message: 'Please enter task description' }]}
            >
              <Input.TextArea placeholder="Enter task description" rows={5} />
            </Form.Item>

            <Form.Item
              name="periorty" 
              label="Priority"
              rules={[{ required: true, message: 'Please select priority' }]}
            >
              <Select size="large" placeholder="Select priority">
                <Select.Option value="highest">Highest</Select.Option>
                <Select.Option value="medium">Medium</Select.Option>
                <Select.Option value="lowest">Lowest</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item className="text-right">
              <Button type="primary" htmlType="submit">
                Create Task
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default App;