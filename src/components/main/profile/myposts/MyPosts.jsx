import React, {Component} from "react";
import s from '../../../../style/component/Profile/MyPost.module.css'
// Component
import Post from "./post/Post";
import {addPost, updateNewChangeText} from "../../../../redux/state";


class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.addPost = this.addPost.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(e) {
        updateNewChangeText(e.target.value);
    }

    addPost() {
        addPost();
    }

    render() {
        return (
            <div className={s.postBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea onChange={this.onChangeText}
                                  value={this.props.newPostText}
                                  cols="30"
                                  rows="10"/>
                    </div>
                    <div>
                        <button onClick={this.addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post postsData={this.props.postsData}/>
                </div>
            </div>
        )
    }
}

export default MyPosts;