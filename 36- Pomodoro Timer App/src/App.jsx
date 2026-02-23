import "animate.css";
import { Input, Modal, Form, Divider, Button, InputNumber, Progress, notification } from "antd";
import { useState, useEffect, useRef } from "react";
import 'remixicon/fonts/remixicon.css';
import { useGoal } from "./Zustand/useGoal";
import moment from "moment";
import { nanoid } from "nanoid";
import { Howl } from 'howler';

const alarmSound = new Howl({
  src: ['/alrm1.mp3'], // Note the leading slash for public folder
  loop: true,
  volume: 0.5
});

function App() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { goals, setGoal, updateGoalProgress, resetGoalTimer } = useGoal();
  const [activeTimer, setActiveTimer] = useState(null);
  const intervalsRef = useRef({});

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalsRef.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  const createGoal = (values) => {
    const newGoal = {
      ...values,
      progress: 0,
      date: new Date(),
      id: nanoid(),
      isActive: false,
      timeLeft: values.timer * 60, // Convert minutes to seconds
      originalTime: values.timer * 60
    };

    setGoal(newGoal);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const trackProgress = (item) => {
    // Stop any other active timer
    if (activeTimer && activeTimer !== item.id) {
      stopTimer(activeTimer);
    }

    if (item.isActive) {
      stopTimer(item.id);
    } else {
      startTimer(item);
    }
  };

  const startTimer = (item) => {
    setActiveTimer(item.id);
    updateGoalProgress(item.id, item.progress, true);

    // Clear any existing interval for this goal
    if (intervalsRef.current[item.id]) {
      clearInterval(intervalsRef.current[item.id]);
    }

    let timeLeft = item.timeLeft || item.timer * 60;
    const totalTime = item.originalTime || item.timer * 60;

    intervalsRef.current[item.id] = setInterval(() => {
      timeLeft -= 1;

      // Calculate progress percentage
      const progress = Math.max(0, 100 - (timeLeft / totalTime) * 100);

      updateGoalProgress(item.id, Math.round(progress), true);

      // Update timeLeft in the interval
      const goal = goals.find(g => g.id === item.id);
      if (goal) {
        goal.timeLeft = timeLeft;
      }

      // When timer reaches 0
      if (timeLeft <= 0) {
        clearInterval(intervalsRef.current[item.id]);
        delete intervalsRef.current[item.id];

        // Play alarm sound
        alarmSound.play();

        // Show notification
        notification.success({
          message: 'Timer Complete!',
          description: `${item.title} timer has finished!`,
          duration: 5,
        });

        updateGoalProgress(item.id, 100, false);
        setActiveTimer(null);

        // Stop alarm after 10 seconds
        setTimeout(() => {
          alarmSound.stop();
        }, 10000);
      }
    }, 1000);
  };

  const stopTimer = (goalId) => {
    if (intervalsRef.current[goalId]) {
      clearInterval(intervalsRef.current[goalId]);
      delete intervalsRef.current[goalId];
    }

    updateGoalProgress(goalId, goals.find(g => g.id === goalId)?.progress || 0, false);
    setActiveTimer(null);
    alarmSound.stop();
  };

  const resetTimer = (goalId) => {
    stopTimer(goalId);
    resetGoalTimer(goalId);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col">
        <div className="w-9/12 mt-4 bg-purple-300 py-10 mx-auto rounded ">
          <h2 className="text-center font-semibold text-slate-700">
            Goal Tracker with Timer and Alarm
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="w-34 flex mt-4 mx-auto text-center font-bold px-3 bg-zinc-500 py-2 rounded hover:scale-110 duration-400 text-center items-center gap-2"
          >
            <i className="ri-add-circle-fill ri-add-circle-line text-3xl text-red-700"></i>
            Add Goal
          </button>
        </div>

        <div className="py-6 w-9/12 mx-auto space-y-8">
          {goals.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl">No goals yet. Add your first goal!</p>
            </div>
          ) : (
            goals.map((item) => (
              <div className="border p-4 bg-black/85 text-white rounded shadow-lg" key={item.id}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h1 className="text-xl font-bold text-white">{item.title}</h1>
                    <p className="text-gray-300 font-semibold">{item.description}</p>
                    <label className="text-gray-300 font-bold">
                      Added: {moment(item.date).format('DD/MM/YYYY, hh:mm A')}
                    </label>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => resetTimer(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Reset Timer"
                    >
                      <i className="ri-restart-line"></i>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Progress</span>
                    <span className="font-bold">{item.progress}%</span>
                  </div>
                  <Progress
                    percent={item.progress}
                    strokeColor={{
                      '0%': '#87d068',
                      '100%': '#108ee9',
                    }}
                    strokeWidth={15}
                    className="custom-progress"
                  />

                  {/* Time Display */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        {formatTime(item.timeLeft || item.timer * 60)}
                      </div>
                      <div className="text-sm text-gray-300">Time Remaining</div>
                    </div>

                    <button
                      onClick={() => trackProgress(item)}
                      className={`text-2xl w-32 px-2 py-3 rounded duration-400 flex items-center justify-center gap-2 ${item.isActive
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-green-600 hover:bg-green-700'
                        }`}
                    >
                      <i className={`ri-${item.isActive ? 'pause' : 'play'}-circle-fill`}></i>
                      {item.isActive ? 'Pause' : 'Start'}
                    </button>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-300">
                        {item.timer} min
                      </div>
                      <div className="text-sm text-gray-300">Total Time</div>
                    </div>
                  </div>

                  {/* Alarm Status */}
                  {item.progress >= 100 && (
                    <div className="mt-3 p-2 bg-yellow-900/50 rounded text-center">
                      <i className="ri-alarm-warning-line text-xl text-yellow-300 mr-2"></i>
                      <span className="text-yellow-300 font-bold">Timer Complete! Alarm is ringing!</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add CSS for custom progress bar */}
        <style jsx>{`
          .custom-progress .ant-progress-bg {
            transition: width 1s linear !important;
          }
        `}</style>

        <Modal onCancel={handleClose} open={open} footer={null} title="Create New Goal">
          <Form form={form} layout="vertical" onFinish={createGoal}>
            <Divider />

            <Form.Item label="Goal Name" name="title" rules={[{ required: true }]}>
              <Input size="large" placeholder="Set your goal" />
            </Form.Item>

            <Form.Item label="Description" name="description" rules={[{ required: true }]}>
              <Input.TextArea rows={4} size="large" placeholder="Set your goal description" />
            </Form.Item>

            <Form.Item
              label="Timer (minutes)"
              name="timer"
              rules={[
                { required: true, message: 'Please enter timer duration' },
                { type: 'number', min: 1, message: 'Minimum 1 minute' },
                { type: 'number', max: 240, message: 'Maximum 240 minutes (4 hours)' }
              ]}
            >
              <InputNumber
                size="large"
                placeholder="Timer in minutes"
                className="!w-full"
                min={1}
                max={240}
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary" size="large" block>
                Create Goal
              </Button>
            </Form.Item>

          </Form>
        </Modal>
      </div>
    </>
  );
}

export default App;