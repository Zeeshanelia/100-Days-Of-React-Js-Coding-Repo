import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">✍️ Create a New Post</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            {/* User ID */}
            <div className="mb-3">
              <label htmlFor="userId" className="form-label fw-semibold">
                User ID
              </label>
              <input
                type="text"
                ref={userIdElement}
                className="form-control"
                id="userId"
                placeholder="Enter your user ID"
                required
              />
            </div>

            {/* Post Title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold">
                Post Title
              </label>
              <input
                type="text"
                ref={postTitleElement}
                className="form-control"
                id="title"
                placeholder="Enter post title"
                required
              />
            </div>

            {/* Post Body */}
            <div className="mb-3">
              <label htmlFor="body" className="form-label fw-semibold">
                Post Content
              </label>
              <textarea
                rows="4"
                ref={postBodyElement}
                className="form-control"
                id="body"
                placeholder="Write something here..."
                required
              />
            </div>

            {/* Reactions */}
            <div className="mb-3">
              <label htmlFor="reaction" className="form-label fw-semibold">
                Reactions
              </label>
              <input
                type="number"
                ref={reactionElement}
                className="form-control"
                id="reaction"
                placeholder="Number of reactions"
                min="0"
              />
            </div>

            {/* Hashtags */}
            <div className="mb-3">
              <label htmlFor="tags" className="form-label fw-semibold">
                Hashtags
              </label>
              <input
                type="text"
                ref={tagsElement}
                className="form-control"
                id="tags"
                placeholder="e.g. react javascript webdev"
              />
              <div className="form-text text-muted">
                Separate tags with spaces
              </div>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                🚀 Submit Post
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;