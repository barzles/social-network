import React from "react";

const Post = props => {
    return (
        <div>
            {
                props.postsData.map(item => <div>
                        <div key={item.id}>{item.message}</div>
                        <div>{item.likesCount}</div>
                    </div>
                )
            }

        </div>
    )
};
export default Post;