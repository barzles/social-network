import React from "react";
import s from '../../../../style/component/Profile/MyPost.module.css'

// Component
import Post from "./post/Post";

const MyPosts = ({updateNewPostText, addPost, newPostText, postsData}) => {

    return (
      <div className={s.postBlock}>
        <h2>My posts</h2>
        <div>
          <div>
                        <textarea
                          onChange={(e) => {
                            let text = e.target.value;
                            updateNewPostText(text)
                          }}
                          value={newPostText}
                          cols="30"
                          rows="10"/>
          </div>
          <div>
            <button
              onClick={addPost}>
              Add post
            </button>
          </div>
        </div>
        <div className={s.posts}>
          <Post postsData={postsData}/>
        </div>
      </div>
    )
}

export default MyPosts;
