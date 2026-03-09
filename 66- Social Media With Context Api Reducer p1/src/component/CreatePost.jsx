import { useContext, useRef } from "react"
import { PostList } from "../Store/post-list-store"

const CreatePost = () => {
  const {addPost} = useContext(PostList)
  const userIdElemet = useRef()
  const postTitleElemet = useRef()
  const postBodyElemet  = useRef()
  const ReactionElemet = useRef()
  const tagsElemet = useRef()

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const userId = userIdElemet.current.value;
    const postTitle = postTitleElemet.current.value;
    const postBody =postBodyElemet.current.value;
    const Reaction = ReactionElemet.current.value;
    const tags = tagsElemet.current.value.split(" ");

    userIdElemet.current.value = " "
    postTitleElemet.current.value = " "
    postBodyElemet.current.value = " "
    ReactionElemet.current.value = " "

    addPost( userId, postTitle,postBody,Reaction,tags)
  }
  return (
    <>
    <form className="bord" onSubmit={handleSubmit}>
    <div className="mb-3 super">
        <label htmlFor="userId" className="htmlFor-label">UserId</label>
        <input type="text" ref={userIdElemet} className="htmlFor-control" id="userId" placeholder="Enter Your Id Name" /></div>

      <div className="mb-3 super">
        <label htmlFor="title" className="htmlFor-label">Content of Post</label>
        <input type="text" ref={postTitleElemet} className="htmlFor-control" id="title" placeholder="Enter Here Feeling" /></div>

        <div className="mb-3 super">
        <label htmlFor="body" className="htmlFor-label">Post Title</label>
        <textarea rows="4" ref={postBodyElemet} type="text" className="htmlFor-control" id="body" placeholder="Any thing write here" /></div>

        <div className="mb-3 super">
        <label htmlFor="Reaction" className="htmlFor-label"> Reaction </label>
        <input type="text" ref={ReactionElemet} className="htmlFor-control" id="Reaction" placeholder="Reaction of People" /></div>

        <div className="mb-3 super">
        <label htmlFor="tags" className="htmlFor-label"> Hashtags </label>
        <input type="text" ref={tagsElemet} className="htmlFor-control" id="tags" placeholder="tags of People" /></div>
        
      <button type="submit" className="btn btn-primary super">Submit</button>
      </form>
      </>)}
export default CreatePost