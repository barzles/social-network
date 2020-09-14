import React from "react";

const Post = props => {
    return (
        <div>
            {
                props.postsData.map((item, index) => <div key={`post_${index}`}>
                        <div >{item.message}</div>
                        <div>{item.likesCount}</div>
                    </div>
                )
            }

        </div>
    )
};
export default Post;