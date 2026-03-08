import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'
import { useState } from 'react'
import PostListProvider from './Store/post-list-store'

function App() {
  const [ selectedTab, setselectedTab] = useState ('Home')
  return ( <>
  <PostListProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} /> 
      
      <div className="contant">
      <Header/>  
      {selectedTab === "Home" ?<PostList/>:<CreatePost/>}
      
      <Footer/>
      </div>
    </div>
    </PostListProvider> 
   </> )}
export default App
