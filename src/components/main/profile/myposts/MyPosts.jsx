import React, {Component} from "react";
import s from '../../../../style/component/Profile/MyPost.module.css'
// Component
import Post from "./post/Post";


class MyPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.postBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea onChange={(e) => this.props.updateNewChangeText(e.target.value)}
                                  value={this.props.newPostText}
                                  cols="30"
                                  rows="10"/>
                    </div>
                    <div>
                        <button onClick={this.props.addPost}>Add post</button>
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