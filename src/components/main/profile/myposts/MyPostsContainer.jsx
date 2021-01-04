import React from "react";
import Context from "../../../../Provider";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/reducer/profile";

// Components
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <Context.Consumer>
      {store => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}/>
        )
      }}
    </Context.Consumer>
  )
}

export default MyPostsContainer;
