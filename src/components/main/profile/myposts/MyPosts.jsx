import React from "react";
import s from '../../../../style/component/Profile/MyPost.module.css'
import { Form, Field } from 'react-final-form'

// Component
import Post from "./post/Post";

const MyPosts = ({addPost, postsData}) => {

  let addPostData = (values) => {
  addPost(values.newPostText)
}
    return (
      <div className={s.postBlock}>
        <h2>My posts</h2>
        <div>
          <div>
            <Form onSubmit={addPostData} render={(props) => {
              return (
                <form>
                  <div>
                    <Field component="textarea" name="newPostText"/>
                  </div>
                  <div>
                    <button
                      onClick={props.handleSubmit}>
                      Add post
                    </button>
                  </div>
                </form>
              )
            }}/>
          </div>
          <div>

          </div>
        </div>
        <div className={s.posts}>
          <Post postsData={postsData}/>
        </div>
      </div>
    )
}

export default MyPosts;
