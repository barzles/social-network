import React, {Component} from "react";
import {addPostActionCreator, addUpdateNewPostTextActionCreator} from "../../../../redux/state";
import s from '../../../../style/component/Profile/MyPost.module.css'

// Component
import Post from "./post/Post";

const initialState = {

}

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const {dispatch, postsData, newPostText} = this.props;
    return (
      <div className={s.postBlock}>
        <h2>My posts</h2>
        <div>
          <div>
                        <textarea
                          onChange={(e) => dispatch(addUpdateNewPostTextActionCreator(e))}
                          value={newPostText}
                          cols="30"
                          rows="10"/>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(addPostActionCreator())
              }}>
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
}

export default MyPosts;