import { createContext, useReducer } from "react";

const Default_Post_List = [
  {
    id: "1",
    title: "going to home",
    body: "Lorem ipsum dolor sit quas sunt, et ipsum error voluptatem laborum. Vitae, molestias ad?",
    userId: "9",
    Reaction: "5",
    tags: ["cool", "amazing", "ourSweet"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addIntialPosts: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "dlt_Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "Add_Initial_Posts") {
    // ✅ Spread posts array correctly
    newPostList = [...action.payload.posts, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    Default_Post_List
  );

  const addPost = (userId, postTitle, postBody, Reaction, tags) => {
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        Reaction: Reaction,
        tags: tags,
      },
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "Add_Initial_Posts",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "dlt_Post",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addIntialPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;