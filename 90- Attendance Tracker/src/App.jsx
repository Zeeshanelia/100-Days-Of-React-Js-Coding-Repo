import React, { useEffect, useState } from 'react'
import 'animate.css';
import { Button, Calendar, Tag } from 'antd';
import { useAttendance } from './zustand/useAttendance';
import { nanoid } from 'nanoid';
import moment from 'moment';

const App = () => {
  const {attendances, checkIn, checkOut} = useAttendance()
  const [activeAttendance, setActiveAttendance] = useState(null)
  const [completedAttendance, setCompletedAttendance] = useState(null)
  const [time, setTime] = useState("00:00:00")

  const onDateSelect = (value)=>{
    console.log(value.format("DD-MM-YYYY"))
  }

  const handleCheckin = ()=>{
    checkIn({
      id: nanoid(),
      startAt: new Date(),
      status: 'active'
    })
  }

  const handleCheckout = (id)=>{
    checkOut(id, {
      status: "completed",
      endAt: new Date(),
      duration: time
    })
  }
  
  useEffect(()=>{
    const today = moment().format("DD-MM-YYYY")
    const found = attendances.find(item=>{
      const startAt = moment(item.startAt).format("DD-MM-YYYY")
      return item.status === "active" && startAt === today
    }) || null
    setActiveAttendance(found)

    const isCompleted = attendances.some(item=>{
      const startAt = moment(item.startAt).format("DD-MM-YYYY")
      return item.status === "completed" && startAt === today
    })

    setCompletedAttendance(isCompleted)
  }, [attendances])

  useEffect(()=>{
    if(activeAttendance)
    {
      setInterval(()=>{
        const diff = moment().diff(activeAttendance.startAt)
        const duration = moment.duration(diff)
        const h = duration.hours().toString().padStart(2, "0")
        const m = duration.minutes().toString().padStart(2, "0")
        const s = duration.seconds().toString().padStart(2, "0")
        const format = `${h}:${m}:${s}`
        setTime(format)
      }, 1000)
    }
  }, [activeAttendance])

  const onCellRender = (value)=>{
    const data = {}
    for(const item of attendances)
    {
      const key = moment(item.startAt).format("YYYY-MM-DD")
      data[key] = item.duration
    }

    const cellDate = value.format("YYYY-MM-DD")
    const duration = data[cellDate]
    return duration ? (
      <div>
        <h1 className='font-medium text-lg'>Present</h1>
        <Tag color="magenta-inverse">{duration}</Tag>
      </div>
    )
      :
      null
  }

  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='w-9/12 mx-auto bg-white p-12'>
          <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Attendance Tracker</h1>
            <div className='flex gap-4'>
              <h1 className='text-4xl font-bold'>{time}</h1>
              {
                completedAttendance ? null :
                activeAttendance ?
                <Button size='large' type='primary' className='!bg-rose-500 !text-white' onClick={()=>handleCheckout(activeAttendance.id)}>Check-out</Button>
                :
                <Button size='large' type='primary' className='!bg-green-500 !text-white' onClick={handleCheckin}>Check-in</Button>
              }
            </div>
          </div>
          <div className='mt-8'>
            <Calendar onChange={onDateSelect} cellRender={onCellRender} />
          </div>
      </div>
    </div>
  )
}

export default App
