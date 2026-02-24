import { File, Play, Plus, Trash2, Video } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, Input, message, Modal, Popconfirm, Select, Tooltip } from 'antd'
import { usePlaylist } from './zustand/usePlaylist'
import '@ant-design/v5-patch-for-react-19';
import getVideoId from 'get-youtube-id'
import moment from 'moment';

const App = () => {
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const [playlistForm] = Form.useForm()
  const [videoForm] = Form.useForm()
  const {playlists, setPlaylist, setVideo, videos, removeVideo } = usePlaylist()
  const [activePlaylist, setActivePlaylist] = useState("YouTube Playlist")
  const [data, setData] = useState(videos)
  
  const createPlaylist = (value)=>{
    setPlaylist(value.playlist)
    message.success("Playlist added")
    handlePlaylistModalClose()
  }

  const handlePlaylistModalClose = ()=>{
    playlistForm.resetFields()
    setOpenPlaylistModal(false)
  }

  const handleVideoModalClose = ()=>{
    videoForm.resetFields()
    setOpenVideoModal(false)
  }

  const browsePlaylist = (playlist)=>{
    setActivePlaylist(playlist)
    if(playlist === "all")
    {
      setData(videos)
    }
    else {
      const filtered = videos.filter((item)=>item.playlist === playlist)
      setData(filtered)
    }
  }

  const addVideo = (value)=>{
    const videoId = getVideoId(value.url)
    if(!videoId)
    {
      message.error("Invalid video url")
      return
    }
    value.date = new Date()
    value.thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    value.id = videoId
    setVideo(value)
    handleVideoModalClose()
  }

  const deleteVideo = (id)=>{
    removeVideo(id)
    message.success("Video removed from playlist")
  }

  return (
    <div>
      <aside className='overflow-y-auto fixed w-[300px] h-full bg-[linear-gradient(66deg,_#00c6ff,_#0072ff,_hsl(319.3,_74.80355214039209%,_42.58336623702562%))] py-8 px-4'>
        <div className='flex flex-col gap-2'>
          <button onClick={()=>browsePlaylist("all")} className={`capitalize ${activePlaylist === "all" ? "bg-rose-600 text-white" : "bg-white"} p-3 rounded-lg hover:bg-rose-500 hover:text-white duration-300 active:scale-80 font-medium`}>
            All Data
          </button>
          {
            playlists.map((item, index)=>(
              <button onClick={()=>browsePlaylist(item)} key={index} className={`capitalize ${activePlaylist === item ? 'bg-rose-600 text-white' : 'bg-white'} p-3 rounded-lg hover:bg-rose-500 hover:text-white duration-300 active:scale-80 font-medium`}>
                {item}
              </button>
            ))
          }
        </div>
      </aside>
      <section className='ml-[300px]'>
        <nav className='flex justify-between items-center bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 py-4 px-16 sticky top-0 left-0 z-20'>
            <h1 className='text-xl text-white font-bold text-center capitalize'>{activePlaylist}</h1>
            <div className='flex gap-6'>
              <button onClick={()=>setOpenVideoModal(true)} className='bg-white flex items-center rounded-lg px-8 py-3 font-semibold hover:scale-105 duration-300 active:scale-80'>
                <Video className='w-4 h-4 mr-2' />
                Add Video
              </button>

              <button onClick={()=>setOpenPlaylistModal(true)} className='bg-white flex items-center rounded-lg px-8 py-3 font-semibold hover:scale-105 duration-300 active:scale-80'>
                <Plus className='w-4 h-4 mr-2' />
                New Playlist
              </button>
            </div>
        </nav>
        
        <div className='grid grid-cols-4 gap-8 mt-12 px-16'>
          {
            data.map((item, index)=>(
              <div className='border border-gray-300 rounded-lg hover:scale-120 duration-300 hover:cursor-pointer' key={index}>
                <img src={item.thumbnail} className='rounded-t-lg' />
                <div className='p-3'>
                  <Tooltip title={item.title}>
                    <h1 className='text-base font-medium'>{item.title.slice(0, 30)}...</h1>
                  </Tooltip>
                  <label className='text-gray-500 text-sm'>{moment(item.date).format('DD MMM YYYY, hh:mm A')}</label>
                  <div className='mt-2 flex gap-3'> 
                    <a href={item.url} target="_blank" className='px-2 py-1 rounded flex bg-green-500 items-center text-white text-xs active:scale-80 duration-300'>
                      <Play className='w-3 h-3 mr-1' />
                      Play
                    </a>
                    <Popconfirm title="Do you want to delete this from playlist ?" onConfirm={()=>deleteVideo(item.id)}>
                      <button className='px-2 py-1 rounded flex bg-red-500 items-center text-white text-xs active:scale-80 duration-300'>
                        <Trash2 className='w-3 h-3 mr-1' />
                        Delete
                      </button>
                    </Popconfirm>
                  </div>
                    <label className='capitalize text-xs text-gray-500 font-medium'>Playlist - {item.playlist}</label>
                </div>  
              </div>
            ))
          }
        </div>
      </section>
      <Modal open={openPlaylistModal} footer={null} title="Create new playlist" onCancel={handlePlaylistModalClose}>
        <Form onFinish={createPlaylist} form={playlistForm}>
          <Form.Item name="playlist" rules={[{required: true}]}>
            <Input placeholder='Enter playlist name' size='large' />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' size='large' type='primary'>Create</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal open={openVideoModal} footer={null} title="Add a song" onCancel={handleVideoModalClose}>
        <Form onFinish={addVideo} form={videoForm}>
          <Form.Item name="title" rules={[{required: true}]}>
            <Input placeholder='Enter video name' size='large' />
          </Form.Item>

          <Form.Item name="url" rules={[{required: true, type: "url"}]}>
            <Input placeholder='Enter video url' size='large' />
          </Form.Item>

          <Form.Item name="playlist" rules={[{required: true }]}>
            <Select size='large' placeholder="Choose playlist">
              {
                playlists.map((item,index)=>(
                  <Select.Option value={item} key={index}>{item}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' size='large' danger type='primary'>Add</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App
