import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card mb-4 shadow-sm" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title position-relative pe-4">
          {post.title}
          <span
            className="position-absolute top-0 end-0 text-danger fs-4"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
          </span>
        </h5>

        <p className="card-text text-muted">{post.body}</p>

        <div className="mb-2">
          {(post.tags || []).map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag me-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="alert alert-success mb-0 rounded-bottom rounded-0" role="alert">
        ❤️ <strong>{post.reactions?.likes ?? post.Reaction ?? 0}</strong> people reacted to this post!
      </div>
    </div>
  );
};

export default Post;