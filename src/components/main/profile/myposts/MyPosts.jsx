import React, {Component} from "react";
import s from '../../../../style/component/Profile/MyPost.module.css'
// Component
import Post from "./post/Post";

const postsData = [
    {
        message: 'Hello friend!',
        id: 1,
        likesCount: 7
    },
    {
        message: 'How are you ?',
        id: 2,
        likesCount: 5
    },
    {
        message: 'How old are you ?',
        id: 3,
        likesCount: 12
    },
    {
        message: 'What is your name?',
        id: 4,
        likesCount: 13
    },
];

class MyPosts extends Component {


    render() {
        return (
            <div className={s.postBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
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