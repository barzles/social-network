import React, {Component} from "react";

// Component
import Post from "./post/Post";

class MyPosts extends Component {


    render() {
        return (
            <div>
                my post
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Add post</button>
                </div>
                <Post/>
            </div>
        )
    }
}

export default MyPosts;