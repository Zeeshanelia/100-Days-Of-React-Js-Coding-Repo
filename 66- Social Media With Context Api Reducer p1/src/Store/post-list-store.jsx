import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})

const PostListReducer = (currentPostList, action) => {
    let newPostList = currentPostList
    if (action.type === "dlt_Post") {
        newPostList = currentPostList.filter(post => post.id !== action.paylord.postId)
    } else if (action.type === "Add_Post") { newPostList = [action.payload, ...currentPostList] }
    return newPostList
}


const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(PostListReducer, Default_Post_List)

    const addPost = (userId, postTitle, postBody, Reaction, tags) => {
        // console.log(`${userId} ${postTitle} ${postBody} ${Reaction} ${tags}`)
        dispatchPostList({
            type: "Add_Post",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                userId: "9",
                Reaction: Reaction,
                tags: tags
            }
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: "dlt_Post",
            paylord: {
                postId,
            }
        })
    }

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    )
}


const Default_Post_List = [{
    id: "1",
    title: "going to home",
    body: "Lorem ipsum dolor sit quas sunt, et ipsum error voluptatem laborum. Vitae, molestias ad?",
    userId: "9",
    Reaction: "5",
    tags: ["cool", "amazing", "ourSweet"]
},
{
    id: "2",
    title: "going to city ",
    body: "Lorem ipsum dolor sit quas sunt, et ipsum error voluptatem laborum. Vitae, molestias ad?",
    userId: "2",
    Reaction: "4",
    tags: ["superb", "stage", "ourSweet"]
},
]
export default PostListProvider
